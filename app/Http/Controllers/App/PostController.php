<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\PostCategory;
use App\Models\PostRecommendation;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::with(['author:id,name', 'category:id,name,codename'])
            ->select('id', 'title', 'slug', 'excerpt', 'body', 'author_id', 'category_id', 'updated_at')
            ->orderBy('updated_at', 'asc')
            ->get();

        $recommendedPostIds = PostRecommendation::select('id', 'post_id')
            ->orderBy('rank', 'asc')
            ->limit(5)
            ->get();

        $recommendations = [];

        foreach ($recommendedPostIds as $recomm) {
            foreach ($posts as $post) {
                if ($post->id == $recomm->post_id) {
                    $recommendations[] = $post;
                    break;
                }
            }
        }

        return Inertia::render('App/Stories/Index', [
            'posts' => $posts,
            'categories' => PostCategory::select('id', 'name', 'desc', 'codename')->get(),
            'recommendations' => $recommendations,
        ]);
    }

    public function show($slug)
    {
        $post = Post::where('slug', $slug)
            ->with(['author:id,name', 'category:id,name'])
            ->select('id', 'title', 'slug', 'body', 'author_id', 'category_id', 'updated_at')
            ->firstOrFail();

        $postsByCategory = Post::where('category_id', $post->category->id)
            ->select('id', 'title', 'slug', 'body', 'excerpt', 'category_id', 'updated_at')
            ->orderBy('updated_at', 'desc')
            ->limit(3)
            ->get();

        return Inertia::render('App/Stories/Single', [
            'post' => $post,
            'postsByCategory' => $postsByCategory
        ]);
    }

    public function like($id)
    {
        $isLike = request('isLike', true);

        if ($isLike) Post::where('id', $id)->increment('like_count');
        else Post::where('id', $id)->increment('dislike_count');

        return response()->json(['success' => true, 'feedbackType' => $isLike]);
    }
}
