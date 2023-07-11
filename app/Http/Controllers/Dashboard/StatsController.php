<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;

class StatsController extends Controller
{
    public function index()
    {
        return view('dashboard.stats');
    }
}
