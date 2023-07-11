<?php

use App\Models\Service;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\Dashboard\HomeController;
use App\Http\Controllers\Dashboard\MailController;
use App\Http\Controllers\Dashboard\PagesController;
use App\Http\Controllers\Dashboard\PostsController;
use App\Http\Controllers\Dashboard\StatsController;
use App\Models\Post;

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

// Main
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

// Dashboard
Route::get('/dashboard', [HomeController::class, 'index']);

Route::get('/dashboard/home', [HomeController::class, 'home'])->name('dashboard.home');
Route::get('/dashboard/pages', [PagesController::class, 'index'])->name('dashboard.pages');
Route::get('/dashboard/posts', [PostsController::class, 'index'])->name('dashboard.posts');
Route::get('/dashboard/stats', [StatsController::class, 'index'])->name('dashboard.stats');
Route::get('/dashboard/mail', [MailController::class, 'index'])->name('dashboard.mail');

Route::get('dashboard/pages/edit', function() {
    return view('dashboard.pages-modal', [
        'services' => Service::all()
    ]);
});

// Others
Route::get('/{any}', function () {
    return view('errors.404', [
        'title' => 'Not found',
    ]);
})->where('any', '.*');
