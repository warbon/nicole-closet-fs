<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::middleware('auth:api')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

   Route::post('logout', [AuthController::class, 'logout']);

   // Category
   Route::apiResource('categories', CategoryController::class)->only(['create', 'update', 'delete']);

   // Product
   Route::apiResource('products', ProductController::class)->only(['create', 'update', 'delete']);

});

// Category
Route::apiResource('categories', CategoryController::class)->only(['index', 'show']);

// Product
Route::apiResource('products', ProductController::class)->only(['index', 'show']);

Route::post('register', [AuthController::class, 'register']);
