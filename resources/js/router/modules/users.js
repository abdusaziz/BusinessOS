export default [

    {
        path: '/users',
        name: 'Users',
        component: () => import('../../modules/Admin/users/UserListView.vue'),
        meta: {
            requiresAuth: true,
            permission: 'user.view',
        }
    },

]