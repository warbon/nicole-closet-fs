<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::products();
       // Log::info($products);
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
        // Log::info();
        // $file_name = time().'_'.$request->photo->getClientOriginalName();
        
        // Store in local storage
        $file_name = $request->photo->getClientOriginalName();
        $file_path = $request->photo->storeAs('uploads', $file_name, 'public');
        $request['image_url'] = 'storage/'.$file_path;

        // Store in cloud storage

    //     $file_name=$request->photo->getClientOriginalName();
    //     $file_path = 'uploads/' . $file_name;
    //     Log::info($file_path);

    //    // $file_path = $request->photo->storeAs('uploads', $file_name, 'felix');
    //     Storage::disk('felix')->put($file_path, file_get_contents($request->photo));
    //     $request['image_url'] = $file_path;


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
        $model = $product->load('category_info', 'created_info', 'updated_info');
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
        //Log::info($request);
        //Log::info($product);
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

        if ($request->photo !== 'undefined') {
            Storage::disk('public')->delete(Str::remove('storage/', $product->image_url));
            $file_name = $request->photo->getClientOriginalName();
            $file_path = $request->photo->storeAs('uploads', $file_name, 'public');
            $request['image_url'] = 'storage/'.$file_path;
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
        Storage::disk('public')->delete(Str::remove('storage/', $product->image_url));
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
