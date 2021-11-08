<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Validation\Rule;
use Carbon\Carbon;

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
        'new_arrival',
        'status',
        'remarks',
        'created_by',
        'updated_by'
    ];

    public function category_info()
    {
        return $this->hasOne(
            Category::class,
            'id',
            'category_id'
        );
    }

    public function created_info()
    {
        return $this->hasOne(
            User::class,
            'id',
            'created_by'
        );
    }

    public function updated_info()
    {
        return $this->hasOne(
            User::class,
            'id',
            'updated_by'
        );
    }

    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->format('M j Y h:i:s A');
    }

    public function getUpdatedAtAttribute($value)
    {
        return Carbon::parse($value)->format('M j Y h:i:s A');
    }

    public static function products()
    {
        return self::build_list()->get();
    }

    public static function build_list()
    {
        return Product::join(
                'users as c',
                'c.id',
                '=',
                'products.created_by'
            )
            ->join(
                'users as u',
                'u.id',
                '=',
                'products.updated_by'
            )
            ->join(
                'categories',
                'categories.id',
                '=',
                'products.category_id'
            )
            ->select(
                [
                    'products.*',
                    'categories.name as category_name',
                    'c.name as created_byname',
                    'u.name as updated_byname', 
                ]
            );
    }
}

