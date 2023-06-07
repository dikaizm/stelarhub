<?php

use Illuminate\Support\Facades\Route;

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
    ]);
});

Route::get('/about', function () {
    return view('about', [
        'title' => 'About',
    ]);
});

Route::get('/novanote', function () {
    return view('platform.novanote', [
        'title' => 'Novanote',
    ]);
});

Route::get('/{any}', function () {
    return view('errors.404', [
        'title' => 'Not found',
    ]);
})->where('any', '.*');