<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use App\Models\Work;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WorkController extends Controller
{
    public function index()
    {
        return Inertia::render('App/Works/Index', [
            'works' => Work::with('categories:id,name')
                ->select('id', 'client_name', 'excerpt', 'title', 'slug')
                ->orderBy('updated_at', 'desc')
                ->get(),
        ]);
    }

    public function show($slug)
    {
        $work = Work::where('slug', $slug)->firstOrFail();

        return Inertia::render('App/Works/Single', [
            'work' => $work
        ]);
    }
}
