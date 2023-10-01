<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('works__work_categories', function (Blueprint $table) {
            $table->unsignedBigInteger('work_id');
            $table->unsignedBigInteger('category_id');

            $table->primary(['work_id', 'category_id']);

            $table->foreign('work_id')->references('id')->on('works');
            $table->foreign('category_id')->references('id')->on('work_categories');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('works_work_category');
    }
};
