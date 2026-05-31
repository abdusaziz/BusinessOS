import AdminLayout from '@/components/AdminLayout.vue'

export default [

    {
        path: '/',
        component: AdminLayout,

        meta: {
            requiresAuth: true,
        },

        children: [

            {
                path: '',
                name: 'Dashboard',
                component: () => import('../../modules/Admin/dashboard/DashboardView.vue'),
                meta: {
                    permission: 'dashboard.view',
                }
            },
        ]
    }

]