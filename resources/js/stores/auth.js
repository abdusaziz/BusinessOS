// import { defineStore } from 'pinia'
// import { ref, computed } from 'vue'
// import axios from 'axios'

// export const useAuthStore = defineStore('auth', () => {
//   const user = ref(null)
//   const token = ref(localStorage.getItem('token') || null)

//   const isAuthenticated = computed(() => !!token.value)

//   async function login(credentials) {
//     const { data } = await axios.post('/login', credentials)
//     token.value = data.token
//     user.value = data.user
//     localStorage.setItem('token', data.token)
//     axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
//   }

//   async function logout() {
//     await axios.post('/logout')
//     token.value = null
//     user.value = null
//     localStorage.removeItem('token')
//   }

//   async function fetchUser() {
//     if (!token.value) return
//     axios.defaults.headers.common['Authorization'] = `Bearer ${token.value}`
//     const { data } = await axios.get('/user')
//     user.value = data
//   }

//   return { user, token, isAuthenticated, login, logout, fetchUser }
// })


import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {

    state: () => ({
        user: null,
        token: localStorage.getItem('token') || null,
    }),

    getters: {

        isAuthenticated: (state) => !!state.token,

    },

    actions: {

        setAuth(user, token) {

            this.user = user
            this.token = token

            localStorage.setItem('token', token)
        },

        logout() {

            this.user = null
            this.token = null

            localStorage.removeItem('token')
            this.router.push({ name: 'Login' })
        }
    }

})