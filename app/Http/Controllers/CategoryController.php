<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::all();
        return response() ->json(
            [
                'data' => $categories
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

        $result = Category::create($request->all());

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
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        $model = $category;
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
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
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

        $result = $category->update($request->all());

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
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        $result = (int)$category->delete();

        return response()->json(
            [
                'message' => 'Successfully Deleted.',
                'data' => $result
            ],
            Response::HTTP_OK
        );
    }
}
