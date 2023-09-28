<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Inertia\Inertia;
use App\Models\Menu;
use App\Models\Submenu;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;
}
