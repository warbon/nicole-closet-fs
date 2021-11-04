<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Validation\Rule;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'name',
        'description',
        'image_url',
        'unit',
        'unit_price',
        'selling_price',
        'quantity',
        'status',
        'remarks',
        'created_by',
        'updated_by'
    ];

}

