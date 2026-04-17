<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\Product;
use App\Models\Banner;
use App\Models\Client;
use Inertia\Inertia;
use Illuminate\Http\Request;


class AboutController extends Controller
{
    public function index()
    {
        $clients = Client::latest()->get();


        return Inertia::render('about', [
            'clients' => $clients,
        ]);
    }
}
