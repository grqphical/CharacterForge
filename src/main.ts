import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Landing from "./Pages/Landing.vue"

import { createWebHistory, createRouter } from 'vue-router'
import CharacterBuilder from './Pages/CharacterBuilder.vue'
import CharacterSheet from './Pages/CharacterSheet.vue'

const routes = [
    { path: "/", component: Landing },
    { path: "/create", component: CharacterBuilder },
    { path: "/character-sheet/:id", component: CharacterSheet }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,

})

createApp(App).use(router).mount('#app')
