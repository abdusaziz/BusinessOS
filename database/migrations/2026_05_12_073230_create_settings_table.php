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
        Schema::create('settings', function (Blueprint $table) {
             $table->id();

            $table->foreignId('company_id')
                ->nullable()
                ->constrained()
                ->cascadeOnDelete();

            $table->string('group')->nullable();
            /*
            |--------------------------------------------------------------------------
            | Example Groups
            |--------------------------------------------------------------------------
            | general
            | invoice
            | tax
            | barcode
            | email
            | sms
            | backup
            */

            $table->string('key');

            $table->longText('value')->nullable();

            $table->string('type')->default('string');
            /*
            |--------------------------------------------------------------------------
            | Example Types
            |--------------------------------------------------------------------------
            | string
            | number
            | boolean
            | json
            | array
            */

            $table->boolean('is_public')->default(false);

            $table->timestamps();

            $table->unique(['company_id', 'key']);
            $table->index(['group']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('settings');
    }
};
