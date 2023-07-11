<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Service;

class PagesController extends Controller
{
    public function index()
    {
        return view('dashboard.pages', [
            'services' => Service::all()
        ]);
    }
}
