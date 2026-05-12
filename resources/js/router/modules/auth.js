export default [

    {
        path: '/login',
        name: 'Login',
        component: () => import('../../views/auth/LoginView.vue'),
        meta: {
            guest: true,
        }
    },

]