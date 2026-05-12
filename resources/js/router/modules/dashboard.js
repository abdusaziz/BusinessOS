export default [

    {
        path: '/',
        name: 'Dashboard',
        component: () => import('../../views/dashboard/DashboardView.vue'),
        meta: {
            requiresAuth: true,
        }
    },

]