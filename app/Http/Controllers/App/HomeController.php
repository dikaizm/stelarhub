<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use App\Models\Work;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $latestWorks = Work::select('id', 'client_name', 'excerpt', 'slug', 'image_thumbnail')->orderBy('updated_at', 'desc')->limit(4)->get();

        $recommendedWorks = Work::with('categories:id,name')
        ->join('work_recommendations', 'works.id', '=', 'work_recommendations.work_id')
        ->select('works.id', 'works.title', 'works.excerpt', 'works.slug', 'works.image_thumbnail')
        ->get();

        return Inertia::render('App/Home', [
            'latestWorks' => $latestWorks,
            'recommendedWorks' => $recommendedWorks
        ]);
    }
}
