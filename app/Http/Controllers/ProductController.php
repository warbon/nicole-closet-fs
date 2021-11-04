<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::all();
        return response() ->json(
            [
                'data' => $products
            ],
            Response::HTTP_OK
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'category_id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(
                [
                    'message' => $validator->errors()
                ],
                Response::HTTP_UNPROCESSABLE_ENTITY
            );
        }

        $result = Product::create($request->all());

        return response()->json(
            [
                'message' => 'Successfully Created.',
                'data' => $result
            ],
            Response::HTTP_CREATED
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        $model = $product;
        return response()->json(
            [
                'data' => $model
            ],
            Response::HTTP_OK
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(
                [
                    'message' => $validator->errors()
                ],
                Response::HTTP_UNPROCESSABLE_ENTITY
            );
        }

        $result = $product->update($request->all());

        return response()->json(
            [
                'message' => 'Successfully Updated.',
                'data' => $result
            ],
            Response::HTTP_CREATED
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $result = (int)$product->delete();

        return response()->json(
            [
                'message' => 'Successfully Deleted.',
                'data' => $result
            ],
            Response::HTTP_OK
        );
    }
}
