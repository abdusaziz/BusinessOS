import AdminLayout from '@/components/AdminLayout.vue'

export default [

    {
        path: '/users',
        component: AdminLayout,

        meta: {
            requiresAuth: true,
            menuGroup: 'admin',
            menuLabel: 'Users',
        },

        children: [

            {
                path: '',
                name: 'Users',
                component: () => import('../../modules/Admin/users/UserListView.vue'),
                meta: {
                    permission: 'user.view',
                    menuGroup: 'admin',
                    menuLabel: 'User List',
                }
            },

            {
                path: 'create',
                name: 'UserCreate',
                component: () => import('../../modules/Admin/users/UserCreateView.vue'),
                meta: {
                    permission: 'user.create',
                    menuGroup: 'admin',
                    menuLabel: 'Create User',
                }
            },

            {
                path: ':id/edit',
                name: 'UserEdit',
                component: () => import('../../modules/Admin/users/UserEditView.vue'),
                meta: {
                    permission: 'user.update',
                    menuGroup: 'admin',
                    menuLabel: 'Edit User',
                }
            },

        ]
    }

]