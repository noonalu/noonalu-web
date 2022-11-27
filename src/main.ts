import { createApp } from 'vue'
import './styles/main.scss'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

// Components
import Home from "./components/Home.vue"
import Calendar from "./components/Calendar/Calendar.vue"

// Routing
const routes = [
	{ path: '/', component: Home },
	{ path: '/cal', component: Calendar },
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
