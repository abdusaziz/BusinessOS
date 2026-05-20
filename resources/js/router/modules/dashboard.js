export default [

    {
        path: '/',
        name: 'Dashboard',
        component: () => import('../../views/dashboard/DashboardView.vue'),
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/test',
        name: 'Test',
        component: () => import('../../views/dashboard/Test.vue'),
        meta: {
            requiresAuth: true,
        }
    },

]