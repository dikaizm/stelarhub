<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostsController extends Controller
{
    public function index()
    {
        return Inertia::render('App/Stories', [
            'posts' => Post::with(['author:id,name', 'category:id,name,codename'])
                ->select('id', 'title', 'slug', 'excerpt', 'body', 'author_id', 'category_id', 'updated_at')
                ->get(),
        ]);
    }

    public function show(Post $post)
    {
        return view('post', [
            'title' => 'Single Post',
            'post' => $post
        ]);
    }
}
