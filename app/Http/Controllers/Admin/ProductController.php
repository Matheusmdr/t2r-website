<?php

namespace App\Http\Controllers\Admin;

use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;


class ProductController extends Controller
{

    public function indexPublic()
    {
        return Inertia::render('products/index', [
            'products' => Product::with('category')->latest()->paginate(9),
        ]);
    }

    public function showPublic(string $productSlug)
    {
        $product = Product::with('category')->where('slug', $productSlug)->firstOrFail();

        $relatedProducts = Product::where('id', '!=', $product->id)
            ->latest()
            ->take(8)
            ->get();

        return Inertia::render('products/show', [
            'product' => $product,
            'relatedProducts' => $relatedProducts,
            'categories' => ProductCategory::all(),
        ]);
    }

    public function index()
    {
        return Inertia::render('admin/products/index', [
            'products' => Product::with('category')->latest()->get(),
            'categories' => ProductCategory::all()
        ]);
    }

    public function create()
    {
        return Inertia::render('admin/products/create', [
            'categories' => ProductCategory::all()
        ]);
    }

    public function edit(Product $product)
    {
        return Inertia::render('admin/products/edit', [
            'product' => $product,
            'categories' => ProductCategory::all()
        ]);
    }


    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'product_category_id' => 'required|exists:product_categories,id',
            'description' => 'nullable|string',
            'cover_image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'gallery_images' => 'nullable|array',
            'gallery_images.*' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'price' => 'required|numeric|min:0',
            'tags' => 'nullable|array'
        ]);

        $data = $validated;
        $data['slug'] = Str::slug($request->title);

        if ($request->hasFile('cover_image')) {
            $data['cover_image'] = '/storage/' . $request->file('cover_image')->store('products/covers', 'public');
        }

        if ($request->hasFile('gallery_images')) {
            $galleryPaths = [];
            foreach ($request->file('gallery_images') as $image) {
                $galleryPaths[] = '/storage/' . $image->store('products/gallery', 'public');
            }
            $data['gallery_images'] = $galleryPaths;
        }

        Product::create($data);

        return redirect()->back()->with('message', 'Produto criado com sucesso!');
    }

    public function update(Request $request, Product $product)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'product_category_id' => 'required|exists:product_categories,id',
            'description' => 'nullable|string',
            'cover_image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'gallery_images' => 'nullable|array',
            'gallery_images.*' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'price' => 'required|numeric|min:0',
            'tags' => 'nullable|array'
        ]);

        $data = $validated;

        // Atualiza slug apenas se o título mudar
        if ($request->title !== $product->title) {
            $data['slug'] = Str::slug($request->title);
        }

        // Atualização da Capa
        if ($request->hasFile('cover_image')) {
            // Deleta a imagem antiga se existir
            if ($product->cover_image) {
                Storage::disk('public')->delete($product->cover_image);
            }
            $data['cover_image'] = '/storage/' . $request->file('cover_image')->store('products/covers', 'public');
        }



        if ($request->gallery_images) {

            if (isset($product) && $product->gallery_images) {
                foreach ($product->gallery_images as $oldPath) {
                    Storage::disk('public')->delete(str_replace('/storage/', '', $oldPath));
                }
            }

            $galleryPaths = [];

            $files = $request->file('gallery_images');



            foreach ($files as $image) {


                if ($image->isValid()) {

                    $path = $image->store('products/gallery', 'public');
                    $galleryPaths[] = '/storage/' . $path;
                }
            }

            $data['gallery_images'] = $galleryPaths;
        }

        $product->update($data);

        return redirect()->back()->with('message', 'Produto atualizado com sucesso!');
    }

    public function deleteImage(Product $product)
    {
        if ($product->cover_image) {
            Storage::disk('public')->delete($product->cover_image);
        }

        $product->update(['cover_image' => '']);

        return redirect()->back()->with('message', 'Imagem removida com sucesso!');
    }

    public function deleteGalleryImage(Product $product, $index)
    {
        $images = $product->gallery_images ?? [];

        if (isset($images[$index])) {
            $imagePath = str_replace('/storage/', '', $images[$index]);
            Storage::disk('public')->delete($imagePath);

            array_splice($images, $index, 1);

            $product->gallery_images = $images;
            $product->save();

            return redirect()->back()->with('message', 'Imagem da galeria removida com sucesso!');
        }

        return redirect()->back()->with('error', 'Imagem não encontrada.');
    }

    public function destroy(Product $product)
    {
        if ($product->cover_image) {
            Storage::disk('public')->delete($product->cover_image);
        }

        if ($product->gallery_images) {
            foreach ($product->gallery_images as $path) {
                Storage::disk('public')->delete($path);
            }
        }

        $product->delete();

        return redirect()->back()->with('message', 'Produto removido com sucesso!');
    }
}
