<?php

namespace Database\Seeders;

use App\Models\Company;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Company::create([
            'name'       => 'Demo Company',
            'email'      => 'admin@demo.com',
            'phone'      => '01700000000',
            'address'    => 'Dhaka, Bangladesh',
            'currency'   => 'BDT',
            'timezone'   => 'Asia/Dhaka',
            'website'    => 'https://demo.com',
            'is_active'  => true,
        ]);
    }
}
