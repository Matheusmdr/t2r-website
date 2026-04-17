<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'content',
        'cover_image',
        'tags',
        'embed_videos',
        'is_published',
    ];

    protected $casts = [
        'tags' => 'array',
        'embed_videos' => 'array',
        'is_published' => 'boolean',
    ];
}
