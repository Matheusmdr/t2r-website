<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

use App\Http\Controllers\Admin\ProductCategoryController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Admin\BannerController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Admin\SiteSettingController;
use App\Http\Controllers\Admin\DepartmentController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\ClientController;
Route::get('/', function () { 
    $clients = \App\Models\Client::where('is_active', true)->get();
    return Inertia::render('home', ['clients' => $clients]); 
})->name('public.home');
Route::get('/ppk-para-drones', function () {
    $drones = \App\Models\Product::with('category')
        ->whereHas('category', function($q) {
            $q->where('slug', 'like', '%ppk%');
        })
        ->where('is_active', true)
        ->get();
    return Inertia::render('ppk-para-drones', ['drones' => $drones]);
})->name('public.ppk.index');
Route::get('/base-gnss', function () { return Inertia::render('base-gnss'); })->name('public.base-gnss.index');
Route::get('/t2r-geotagger', function () { return Inertia::render('t2r-geotagger'); })->name('public.t2r-geotagger.index');
Route::get('/metashape', function () { return Inertia::render('metashape'); })->name('public.metashape.index');
Route::get('/sobre-nos', function () { return Inertia::render('sobre-nos'); })->name('public.sobre-nos.index');
Route::get('/blog', [PostController::class, 'indexPublic'])->name('public.blog.index');
Route::get('/blog/{slug}', [PostController::class, 'showPublic'])->name('public.blog.show');
Route::get('/fale-conosco', function () { return Inertia::render('fale-conosco'); })->name('public.fale-conosco.index');
Route::get('/produtos', function () { return Inertia::render('produtos'); })->name('public.produtos.index');


// --- ÁREA ADMINISTRATIVA (Restrita) ---

Route::middleware(['auth', 'verified'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

    Route::get('/products',[ ProductController::class, 'index'])->name('products.index');
    Route::get('/products/create', [ProductController::class, 'create'])->name('products.create');
    Route::post('/products', [ProductController::class, 'store'])->name('products.store');
    Route::get('/products/edit/{product}', [ProductController::class, 'edit'])->name('products.edit');
    Route::put('/products/{product}', [ProductController::class, 'update'])->name('products.update');
    Route::delete('/products/delete/{product}', [ProductController::class, 'destroy'])->name('products.destroy');
    Route::delete('/products/delete-image/{product}', [ProductController::class, 'deleteImage'])->name('products.deleteImage');
    Route::delete('/products/delete-gallery-image/{product}/{imageIndex}', [ProductController::class, 'deleteGalleryImage'])->name('products.deleteGalleryImage');

    Route::get('/services', [ServiceController::class, 'index'])->name('services.index');
    Route::get('/services/create', [ServiceController::class, 'create'])->name('services.create');
    Route::post('/services', [ServiceController::class, 'store'])->name('services.store');
    Route::get('/services/edit/{service}', [ServiceController::class, 'edit'])->name('services.edit');
    Route::put('/services/{service}', [ServiceController::class, 'update'])->name('services.update');
    Route::delete('/services/delete/{service}', [ServiceController::class, 'destroy'])->name('services.destroy');
    Route::delete('/services/delete-image/{service}', [ServiceController::class, 'deleteServiceImage'])->name('services.deleteServiceImage');

    Route::get('/product-categories', [ProductCategoryController::class, 'index'])->name('product-categories.index');
    Route::get('/product-categories/create', [ProductCategoryController::class, 'create'])->name('product-categories.create');
    Route::post('/product-categories', [ProductCategoryController::class, 'store'])->name('product-categories.store');
    Route::get('/product-categories/edit/{productCategory}', [ProductCategoryController::class, 'edit'])->name('product-categories.edit');
    Route::put('/product-categories/{productCategory}', [ProductCategoryController::class, 'update'])->name('product-categories.update');
    Route::delete('/product-categories/delete/{productCategory}', [ProductCategoryController::class, 'destroy'])->name('product-categories.destroy');

    Route::get('/banners', [BannerController::class, 'index'])->name('banners.index');
    Route::get('/banners/create', [BannerController::class, 'create'])->name('banners.create');
    Route::post('/banners', [BannerController::class, 'store'])->name('banners.store');
    Route::get('/banners/edit/{banner}', [BannerController::class, 'edit'])->name('banners.edit');
    Route::put('/banners/{banner}', [BannerController::class, 'update'])->name('banners.update');
    Route::delete('/banners/delete/{banner}', [BannerController::class, 'destroy'])->name('banners.destroy');
    Route::delete('/banners/delete-image/{banner}', [BannerController::class, 'deleteBannerImage'])->name('banners.deleteBannerImage');

    Route::get('/posts', [PostController::class, 'index'])->name('posts.index');
    Route::get('/posts/create', [PostController::class, 'create'])->name('posts.create');
    Route::post('/posts', [PostController::class, 'store'])->name('posts.store');
    Route::get('/posts/edit/{post}', [PostController::class, 'edit'])->name('posts.edit');
    Route::put('/posts/{post}', [PostController::class, 'update'])->name('posts.update');
    Route::delete('/posts/delete/{post}', [PostController::class, 'destroy'])->name('posts.destroy');
    Route::delete('/posts/delete-image/{post}', [PostController::class, 'deletePostImage'])->name('posts.deletePostImage');

    Route::get('/clients', [ClientController::class, 'index'])->name('clients.index');
    Route::get('/clients/create', [ClientController::class, 'create'])->name('clients.create');
    Route::post('/clients', [ClientController::class, 'store'])->name('clients.store');
    Route::get('/clients/edit/{client}', [ClientController::class, 'edit'])->name('clients.edit');
    Route::put('/clients/{client}', [ClientController::class, 'update'])->name('clients.update');
    Route::delete('/clients/delete/{client}', [ClientController::class, 'destroy'])->name('clients.destroy');
    Route::delete('/clients/delete-image/{client}', [ClientController::class, 'deleteClientImage'])->name('clients.deleteClientImage');


    Route::get('/users', [UserController::class, 'index'])->name('users.index');
    Route::get('/users/create', [UserController::class, 'create'])->name('users.create');
    Route::post('/users', [UserController::class, 'store'])->name('users.store');
    Route::get('/users/edit/{user}', [UserController::class, 'edit'])->name('users.edit');
    Route::put('/users/{user}', [UserController::class, 'update'])->name('users.update');
    Route::delete('/users/delete/{user}', [UserController::class, 'destroy'])->name('users.destroy');

    Route::get('/settings', [SiteSettingController::class, 'edit'])->name('settings.edit');
    Route::post('/settings', [SiteSettingController::class, 'update'])->name('settings.update');

    Route::post('/departments', [DepartmentController::class, 'store'])->name('departments.store');
    Route::put('/departments/{department}', [DepartmentController::class, 'update'])->name('departments.update');
    Route::delete('/departments/{department}', [DepartmentController::class, 'destroy'])->name('departments.destroy');

    Route::get('/settings', [SiteSettingController::class, 'index'])->name('settings.index');
    Route::post('/settings', [SiteSettingController::class, 'update'])->name('settings.update');

    Route::post('/departments', [DepartmentController::class, 'store'])->name('departments.store');
    Route::put('/departments/{department}', [DepartmentController::class, 'update'])->name('departments.update');
    Route::delete('/departments/{department}', [DepartmentController::class, 'destroy'])->name('departments.destroy');
});

require __DIR__.'/settings.php';
