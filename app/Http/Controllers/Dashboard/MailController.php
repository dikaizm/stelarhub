<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;

class MailController extends Controller
{
    public function index()
    {
        return view('dashboard.mail');
    }
}
