<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\PostCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostsController extends Controller
{
    public function index()
    {
        return Inertia::render('App/Stories/Index', [
            'posts' => Post::with(['author:id,name', 'category:id,name,codename'])
                ->select('id', 'title', 'slug', 'excerpt', 'body', 'author_id', 'category_id', 'updated_at')
                ->orderBy('updated_at', 'asc')
                ->get(),
            'categories' => PostCategory::select('id', 'name', 'desc', 'codename')->get(),
        ]);
    }

    public function show($slug)
    {
        return Inertia::render('App/Stories/Single', [
            'post' => Post::where('slug', $slug)
                ->with(['author:id,name', 'category:id,name'])
                ->select('id', 'title', 'body', 'author_id', 'category_id', 'updated_at')
                ->firstOrFail(),
        ]);
    }
}
