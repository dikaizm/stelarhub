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
        Schema::create('works__work_features', function (Blueprint $table) {
            $table->unsignedBigInteger('work_id');
            $table->unsignedBigInteger('feature_id');

            $table->primary(['work_id', 'feature_id']);

            $table->foreign('work_id')->references('id')->on('works');
            $table->foreign('feature_id')->references('id')->on('work_features');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('works__work_features');
    }
};
