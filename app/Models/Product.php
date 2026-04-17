<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    protected $fillable = [
        'product_category_id', 'title', 'slug', 'sku', 'price',
        'short_description', 'description', 'cover_image',
        'gallery_images', 'tags', 'tech_specs', 'is_active'
    ];

    protected $casts = [
        'gallery_images' => 'array',
        'tags' => 'array',
        'tech_specs' => 'array',
        'is_active' => 'boolean',
        'price' => 'decimal:2',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(ProductCategory::class, 'product_category_id');
    }
}
