<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Azizur Rahman',
            'username' => 'azizur',
            'email' => 'azizur@bos.com',
            'email_verified_at' => now(),
            'password' => '$2y$10$OT9ClI5D6RL4BZzSt1lgiucISks/LbNxCV1z3UHg8CLtBCtH1DGE.',
            'remember_token' => Str::random(10),
        ]);
    }
}
