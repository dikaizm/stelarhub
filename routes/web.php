<?php

use App\Models\Service;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('home', [
        'title' => 'Stelar - Digital Agency',
        'services' => Service::all()
    ]);
});

Route::get('/about', function () {
    return view('about', [
        'title' => 'About',
    ]);
});

Route::get('/blog', [PostController::class, 'index']);
Route::get('/blog/{post:slug}', [PostController::class, 'show']);

Route::get('/novanote', function () {
    return view('platform.novanote', [
        'title' => 'Novanote',
    ]);
});

Route::get('/dashboard', function () {
    return view('dashboard.home', [
        'title' => 'Stelar - Dashboard',
    ]);
});

Route::get('/{any}', function () {
    return view('errors.404', [
        'title' => 'Not found',
    ]);
})->where('any', '.*');
