import AdminLayout from '@/components/AdminLayout.vue'

export default [

    {
        path: '/users',
        component: AdminLayout,

        meta: {
            requiresAuth: true,
        },

        children: [

            {
                path: '',
                name: 'Users',
                component: () => import('../../modules/Admin/users/UserListView.vue'),
                meta: {
                    permission: 'user.view',
                }
            },

            {
                path: 'create',
                name: 'UserCreate',
                component: () => import('../../modules/Admin/users/UserCreateView.vue'),
                meta: {
                    permission: 'user.create',
                }
            },

            {
                path: ':id/edit',
                name: 'UserEdit',
                component: () => import('../../modules/Admin/users/UserEditView.vue'),
                meta: {
                    permission: 'user.update',
                }
            },

        ]
    }

]