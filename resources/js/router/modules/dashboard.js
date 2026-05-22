export default [

    {
        path: '/',
        name: 'Dashboard',
        component: () => import('../../modules/Admin/dashboard/DashboardView.vue'),
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/test',
        name: 'Test',
        component: () => import('../../modules/Admin/dashboard/Test.vue'),
        meta: {
            requiresAuth: true,
        }
    },

]