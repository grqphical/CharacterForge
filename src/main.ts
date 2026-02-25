import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Landing from "./Pages/Landing.vue"

import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
    { path: "/", component: Landing },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,

})

createApp(App).use(router).mount('#app')
