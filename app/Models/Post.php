<?php

namespace App\Models;

use App\Models\PostCategory;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $guarded = ['id'];
    protected $dates = ['created_at', 'updated_at', 'deleted_at'];

    public function author()
    {
        return $this->belongsTo(User::class, 'author_id', 'id');
    }
    public function category()
    {
        return $this->belongsTo(PostCategory::class, 'category_id', 'id');
    }
}
