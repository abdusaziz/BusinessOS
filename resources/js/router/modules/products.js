import AdminLayout from '@/components/AdminLayout.vue'

export default [

    {
        path: '/products',
        component: AdminLayout,

        meta: {
            requiresAuth: true,
        },

        children: [

            {
                path: 'create',
                name: 'ProductsCreate',
                component: () => import('../../modules/Admin/products/CreateView.vue'),
                meta: {
                    permission: 'product.create.view',
                }
            },
            

        ]
    }

]