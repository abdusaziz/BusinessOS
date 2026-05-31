import AdminLayout from '@/components/AdminLayout.vue'

export default [

    {
        path: '/roles',
        component: AdminLayout,

        meta: {
            requiresAuth: true,
        },

        children: [

            {
                path: '',
                name: 'Roles',
                component: () => import('../../modules/Admin/roles/RoleListView.vue'),
                meta: {
                    permission: 'role.view',
                }
            },

            {
                path: 'create',
                name: 'RoleCreate',
                component: () => import('../../modules/Admin/roles/RoleCreateView.vue'),
                meta: {
                    permission: 'role.create',
                }
            },

            {
                path: ':id/edit',
                name: 'RoleEdit',
                component: () => import('../../modules/Admin/roles/RoleEditView.vue'),
                meta: {
                    permission: 'role.update',
                }
            },
            {
                path: 'permission-matrix',
                name: 'PermissionMatrix',
                component: () => import('../../modules/Admin/permissions/PermissionMatrix.vue'),
                meta: {
                    permission: 'role.update',
                }
            },

        ]
    }

]