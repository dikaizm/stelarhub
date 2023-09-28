<?php

namespace App\Models;

use App\Models\Submenu;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;

    protected $guarded = ['id'];
    protected $dates = ['created_at', 'updated_at', 'deleted_at'];

    public function submenus()
    {
        return $this->hasMany(Submenu::class, 'menu_id', 'id');
    }
}