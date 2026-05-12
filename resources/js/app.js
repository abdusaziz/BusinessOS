// import './bootstrap';
// import { createApp } from 'vue'
// import { createPinia } from 'pinia'
// import router from './router/index.js'
// import App from './App.vue'
// import axios from 'axios'

// axios.defaults.baseURL = '/api'
// axios.defaults.withCredentials = true
// axios.defaults.headers.common['Accept'] = 'application/json'

// const app = createApp(App)
// app.use(createPinia())
// app.use(router)
// app.mount('#app')
// import './metronic/assets/css/styles.css'

// import './bootstrap';
import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import { createPinia } from 'pinia'

// import './assets/css/app.css'
import './../css/app.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')