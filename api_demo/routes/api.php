<?php

use App\Http\Controllers\AboutController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use App\Models\User;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
  Route::apiResource('products', ProjectController::class);
  Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);
Route::apiResource('about', AboutController::class);




// Route::middleware('auth:sanctum')->group(function(){
//     Route::apiResource('products', ProjectController::class);
// });

// Route::post('/sanctum/token', function(Request $request){
//     $request->validate([
//         'email' => 'required|email',
//         'password' => 'required',
//     ]);
//     $user = User::where('email', $request->email)->first();

//     if(!$user || !Hash::check($request->password, $user->password)){
//         throw ValidationException::withMessages([
//         'email' => ['the provided credentials are incorrect.'],
//         ]);
//     }

//     return $user->createToken($request->device_name)->plainTextToken;

// }

// );

