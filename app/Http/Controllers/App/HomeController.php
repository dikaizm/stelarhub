<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use App\Models\Service;
use App\Models\Work;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $latestWorks = Work::select('id', 'client_name', 'excerpt', 'slug', 'image_thumbnail')->orderBy('updated_at', 'desc')->limit(3)->get();

        $recommendedWorks = Work::with('categories:id,name')
        ->join('work_recommendations', 'works.id', '=', 'work_recommendations.work_id')
        ->select('works.id', 'works.title', 'works.excerpt', 'works.slug', 'works.image_thumbnail')
        ->limit(4)
        ->get();

        $services = Service::select('id', 'name', 'desc','endpoint', 'icon')->orderBy('rank', 'asc')->get();

        return Inertia::render('App/Home', [
            'latestWorks' => $latestWorks,
            'recommendedWorks' => $recommendedWorks,
            'services' => $services
        ]);
    }
}
