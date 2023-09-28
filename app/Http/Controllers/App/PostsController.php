<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class PostsController extends Controller
{
    public function index() {
        return view('stories', [
            'posts' => Post::all()
        ]);
    }

    public function show(Post $post) {
        return view('post', [
            'title' => 'Single Post',
            'post' => $post
        ]);
    }
}
