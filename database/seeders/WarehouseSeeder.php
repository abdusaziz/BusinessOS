<?php

namespace Database\Seeders;

use App\Models\Warehouse;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class WarehouseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Warehouse::create([
            'company_id' => 1,
            'branch_id'  => 1,
            'name'       => 'Main Warehouse',
            'code'       => 'WH-001',
            'location'   => 'Ground Floor',
            'is_active'  => true,
        ]);
    }
}
