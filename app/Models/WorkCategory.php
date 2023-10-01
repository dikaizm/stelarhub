<?php

namespace App\Models;

use App\Models\Work;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkCategory extends Model
{
    use HasFactory;

    public function works()
    {
        return $this->belongsToMany(Work::class, 'works__work_categories', 'category_id', 'work_id');
    }
}
