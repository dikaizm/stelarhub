<?php

namespace App\Models;

use App\Models\WorkCategory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Work extends Model
{
    use HasFactory;

    public function categories()
    {
        return $this->belongsToMany(WorkCategory::class, 'works__work_categories', 'work_id', 'category_id');
    }
}
