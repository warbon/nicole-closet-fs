<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
	{
		$request->validate([
			'name' => 'required|string|max:255',
			'email' => 'required|string|email|max:255|unique:users',
			'password' => 'required|string|min:6|confirmed',
		]);

		return User::create([
			'name' => $request->name,
			'email' => $request->email,
			'password' => $request->password,
		]);
	}

	public function logout()
	{
		auth()->user()->oAuthAcessToken()->delete();

		return response()->json('Logged out successfully', 200);
	}
}
