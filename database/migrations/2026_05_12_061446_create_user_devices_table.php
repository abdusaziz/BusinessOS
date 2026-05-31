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
        Schema::create('user_devices', function (Blueprint $table) {
            $table->id();
            
            // 1. Foreign key referencing the parent identity system
            $table->foreignId('user_id')
                ->constrained()
                ->cascadeOnDelete();
                
            // 2. Hardware/Browser client metadata identifiers 
            $table->string('device_name')->comment('Browser, OS, or explicit hardware model name');
            
            // 3. Network tracking (supports both IPv4 and IPv6 string lengths)
            $table->string('ip_address', 45)->nullable();
            
            // 4. Trace identifiers matching the Sanctum token architecture
            $table->string('token')->unique()->comment('The plainTextToken or matching token identifier');
            
            // 5. Operational timestamps
            $table->timestamp('last_login_at')->useCurrent();
            $table->string('browser')->nullable();
            $table->string('platform')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamp('logout_at')->nullable();
            $table->timestamps();

            // 6. Index declarations optimizing search performance on lookup queries
            $table->index(['user_id', 'token']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_devices');
    }
};
