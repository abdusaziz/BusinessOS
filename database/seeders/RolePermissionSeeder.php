<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class RolePermissionSeeder extends Seeder
{
     /**
     * Run the database seeds.
     */
    public function run(): void
    {
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        /*
        |--------------------------------------------------------------------------
        | Permissions
        |--------------------------------------------------------------------------
        */

        $permissions = [

            // Dashboard
            'dashboard.view',

            // User Management
            'user.create',
            'user.view',
            'user.update',
            'user.delete',

            // Role Management
            'role.create',
            'role.view',
            'role.update',
            'role.delete',

            // Branch Management
            'branch.create',
            'branch.view',
            'branch.update',
            'branch.delete',

            // Warehouse Management
            'warehouse.create',
            'warehouse.view',
            'warehouse.update',
            'warehouse.delete',

            // Company Settings
            'settings.view',
            'settings.update',

        ];

        foreach ($permissions as $permission) {
            Permission::firstOrCreate([
                'name' => $permission,
                'guard_name' => 'web',
            ]);
        }

        /*
        |--------------------------------------------------------------------------
        | Roles
        |--------------------------------------------------------------------------
        */

        $superAdmin = Role::firstOrCreate([
            'name' => 'Super Admin',
            'guard_name' => 'web',
        ]);

        $admin = Role::firstOrCreate([
            'name' => 'Admin',
            'guard_name' => 'web',
        ]);

        $manager = Role::firstOrCreate([
            'name' => 'Manager',
            'guard_name' => 'web',
        ]);

        $cashier = Role::firstOrCreate([
            'name' => 'Cashier',
            'guard_name' => 'web',
        ]);

        /*
        |--------------------------------------------------------------------------
        | Assign Permissions
        |--------------------------------------------------------------------------
        */

        // Super Admin gets everything
        $superAdmin->givePermissionTo(Permission::all());

        // Admin
        $admin->givePermissionTo([
            'dashboard.view',

            'user.create',
            'user.view',
            'user.update',

            'role.view',

            'branch.view',
            'warehouse.view',

            'settings.view',
            'settings.update',
        ]);

        // Manager
        $manager->givePermissionTo([
            'dashboard.view',

            'user.view',

            'branch.view',
            'warehouse.view',
        ]);

        // Cashier
        $cashier->givePermissionTo([
            'dashboard.view',
        ]);
    }
}
