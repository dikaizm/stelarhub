<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('works', function (Blueprint $table) {
            $table->id();
            $table->string('client_name');
            $table->string('project_name');
            $table->string('project_year');
            $table->string('project_duration_week');
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('excerpt');
            $table->text('body_about')->nullable();
            $table->text('body_background')->nullable();
            $table->text('body_challenge')->nullable();
            $table->text('body_brief')->nullable();
            $table->json('body_workscope')->nullable();
            $table->json('body_features')->nullable();
            $table->string('image_thumbnail');
            $table->string('image_cover');
            $table->json('image_gallery')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('works');
    }
};
