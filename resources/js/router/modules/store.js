import AdminLayout from '@/components/AdminLayout.vue'

export default [

    {
        path: '/store',
        component: AdminLayout,

        meta: {
            requiresAuth: true,
        },

        children: [

            {
                path: 'setting',
                name: 'StoreSetting',
                component: () => import('../../modules/Admin/store/settings.vue'),
                meta: {
                    permission: 'store.setting.view',
                }
            },
            {
                path: 'online-orders',
                name: 'StoreOnlineOrders',
                component: () => import('../../modules/Admin/store/OnlineOrdersView.vue'),
                meta: {
                    permission: 'store.online_orders.view',
                }
            },
            {
                path: 'collections',
                name: 'StoreCollections',
                component: () => import('../../modules/Admin/store/CollectionsView.vue'),
                meta: {
                    permission: 'store.collections.view',
                }
            },
            {
                path: 'banners',
                name: 'StoreBanners',
                component: () => import('../../modules/Admin/store/BannersView.vue'),
                meta: {
                    permission: 'store.banners.view',
                }
            },
            {
                path: 'subscribers',
                name: 'StoreSubscribers',
                component: () => import('../../modules/Admin/store/SubscribersView.vue'),
                meta: {
                    permission: 'store.subscribers.view',
                }
            },
            {
                path: 'messages',
                name: 'StoreMessages',
                component: () => import('../../modules/Admin/store/MessagesView.vue'),
                meta: {
                    permission: 'store.messages.view',
                }
            },
            {
                path: 'invite-codes',
                name: 'StoreInviteCodes',
                component: () => import('../../modules/Admin/store/InviteCodesView.vue'),
                meta: {
                    permission: 'store.inviteCodes.view',
                }
            },
            {
                path: 'pending-customers',
                name: 'StorePendingCustomers',
                component: () => import('../../modules/Admin/store/PendingCustomersView.vue'),
                meta: {
                    permission: 'store.pendingCustomers.view',
                }
            },

        ]
    }

]