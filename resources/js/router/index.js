import { createRouter, createWebHistory } from 'vue-router'

import authRoutes from './modules/auth'
import dashboardRoutes from './modules/dashboard'
import userRoutes from './modules/users'

const routes = [
    ...authRoutes,
    ...dashboardRoutes,
    ...userRoutes,
    // Catch-all route - redirect to dashboard if authenticated, otherwise guard will redirect to login
    { path: '/:pathMatch(.*)*', redirect: '/', meta: { requiresAuth: true } },
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