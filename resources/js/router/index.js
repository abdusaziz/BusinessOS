// import { createRouter, createWebHistory } from 'vue-router'
// import { useAuthStore } from '@/stores/auth'

// const routes = [
//   { path: '/login', component: () => import('@/pages/Auth/Login.vue'), meta: { guest: true } },
//   {
//     path: '/',
//     component: () => import('@/layouts/AppLayout.vue'),
//     meta: { requiresAuth: true },
//     children: [
//       { path: '', redirect: '/dashboard' },
//       { path: 'dashboard', component: () => import('@/pages/Dashboard.vue') },
//       { path: 'pos', component: () => import('@/pages/POS/Terminal.vue') },
//     ]
//   },
// ]

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// })

// router.beforeEach((to, from, next) => {
//   const auth = useAuthStore()
//   if (to.meta.requiresAuth && !auth.token) return next('/login')
//   if (to.meta.guest && auth.token) return next('/')
//   next()
// })

// export default router

import { createRouter, createWebHistory } from 'vue-router'

import authRoutes from './modules/auth'
import dashboardRoutes from './modules/dashboard'
import userRoutes from './modules/users'

const routes = [
    ...authRoutes,
    ...dashboardRoutes,
    ...userRoutes,
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {

    const token = localStorage.getItem('token')

    if (to.meta.requiresAuth && !token) {
        return next('/login')
    }

    next()
})

export default router