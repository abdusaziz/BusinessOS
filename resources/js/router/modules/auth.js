export default [

    {
        path: '/login',
        name: 'Login',
        component: () => import('../../modules/Admin/auth/LoginView.vue'),
        meta: {
            guest: true,
        }
    },

]