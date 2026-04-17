<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Banner;
use App\Models\Post;
use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Exibe a dashboard principal com métricas e itens recentes.
     */
    public function index()
    {
        return Inertia::render('admin/dashboard', [
            'stats' => [
                'total_products'   => Product::count(),
                'active_products'  => Product::where('is_active', true)->count(),
                'total_posts'      => Post::count(),
                'published_posts'  => Post::where('is_published', true)->count(),
                'active_banners'   => Banner::where('is_active', true)->count(),
                'total_categories' => ProductCategory::count(),
            ],
            // Produtos recentes com relacionamento de categoria
            'recent_products' => Product::with('category')
                ->latest()
                ->take(5)
                ->get()
                ->map(function ($product) {
                    return [
                        'id'          => $product->id,
                        'title'       => $product->title,
                        'category'    => $product->category ? $product->category->title : 'Sem Categoria',
                        'cover_image' => $product->cover_image,
                        'is_active'   => $product->is_active,
                        'created_at'  => $product->created_at->format('d/m/Y'),
                    ];
                }),
            // Posts recentes
            'recent_posts' => Post::select('id', 'title', 'is_published', 'created_at')
                ->latest()
                ->take(5)
                ->get()
                ->map(function ($post) {
                    return [
                        'id'           => $post->id,
                        'title'        => $post->title,
                        'is_published' => $post->is_published,
                        'created_at'   => $post->created_at->format('d/m/Y'),
                    ];
                }),
        ]);
    }
}
