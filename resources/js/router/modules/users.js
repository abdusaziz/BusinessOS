export default [

    {
        path: '/users',
        name: 'Users',
        component: () => import('../../views/users/UserListView.vue'),
        meta: {
            requiresAuth: true,
            permission: 'user.view',
        }
    },

]