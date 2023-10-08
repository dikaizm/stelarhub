<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceController extends Controller
{
    // public function index()
    // {
    //     return Inertia::render('App/Works/Index', [
    //         'works' => Work::with('categories:id,name')
    //             ->select('id', 'client_name', 'excerpt', 'title', 'slug')
    //             ->orderBy('updated_at', 'desc')
    //             ->get(),
    //     ]);
    // }

    public function show($endpoint)
    {
        $fileName = ucfirst($endpoint);
        $data = Service::where('endpoint', $endpoint)->firstOrFail();

        return Inertia::render("App/Solutions/$fileName", [
            'data' => $data
        ]);
    }
}
