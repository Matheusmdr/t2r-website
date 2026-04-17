<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\Product;
use App\Models\Banner;
use App\Models\Client;
use App\Models\Service;
use Inertia\Inertia;
use Illuminate\Http\Request;


class HomeController extends Controller
{
    public function index()
    {
        $posts = Post::latest()->get();
        $products = Product::latest()->get();
        $banners = Banner::orderBy('order', 'asc')->get();
        $clients = Client::latest()->get();


        return Inertia::render('home', [
            'posts' => $posts,
            'products' => $products,
            'banners' => $banners,
            'clients' => $clients,
        ]);
    }


    public function landingSales()
    {
        return Inertia::render('lpone', [
            'clients'  => Client::latest()->get(),
            'products' => Product::latest()->get(),
            'banners'  => Banner::orderBy('order', 'asc')->get(),
            'posts'    => Post::latest()->get(),
            'services' => Service::latest()->get(),
        ]);
    }
}
