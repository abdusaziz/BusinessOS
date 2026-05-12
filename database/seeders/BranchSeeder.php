<?php

namespace Database\Seeders;

use App\Models\Branch;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BranchSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         Branch::create([
            'company_id' => 1,
            'name'       => 'Dhaka Main Branch',
            'code'       => 'DHK-001',
            'phone'      => '01711111111',
            'email'      => 'dhaka@demo.com',
            'address'    => 'Dhaka, Bangladesh',
            'is_active'  => true,
        ]);

        Branch::create([
            'company_id' => 1,
            'name'       => 'Chittagong Branch',
            'code'       => 'CTG-001',
            'phone'      => '01822222222',
            'email'      => 'ctg@demo.com',
            'address'    => 'Chittagong, Bangladesh',
            'is_active'  => true,
        ]);
    }
}
