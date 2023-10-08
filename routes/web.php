<?php

use App\Http\Controllers\App\HomeController;
use App\Http\Controllers\App\PostController;
use App\Http\Controllers\App\ServiceController;
use App\Http\Controllers\App\WorkController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'index']);

Route::get('/about', function () {
    return Inertia::render('App/About');
});

Route::get('/solutions', function () {
    return Inertia::render('App/Solutions/Index');
});
Route::get('/solutions/{services:endpoint}', [ServiceController::class, 'show'])->name('service.show');

Route::get('/works', [WorkController::class, 'index']);
Route::get('/works/{works:slug}', [WorkController::class, 'show'])->name('work.show');

Route::get('/stories', [PostController::class, 'index']);
Route::get('/stories/{posts:slug}', [PostController::class, 'show'])->name('post.show');
Route::post('/stories/{id}/like', [PostController::class, 'like'])->name('post.like');

Route::get('/contact', function () {
    return Inertia::render('App/Contact');
});

Route::get('/insider/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Error route handler
Route::get('/{any}', function () {
    return Inertia::render('Error');
})->where('any', '.*');

require __DIR__.'/auth.php';
