import { createApp } from 'vue'
import './styles/main.scss'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

// Components
import Home from "./components/Home.vue"
import Calendar from "./components/Calendar/Calendar.vue"


// Models
import DayModel from './models/DayModel'

// dummy data lol

let day1 = new DayModel("Mon")
let day2 = new DayModel("Tue")
let day3 = new DayModel("Fri")
let day4 = new DayModel("Sat")

let dayModels: DayModel[] = [day1, day2, day3, day4]

console.log(dayModels[0].name)

// Routing
const routes = [

	{
		path: '/', component: Home
	},
	{
		path: '/cal',
		component: Calendar,
		props: {
			dayModels: dayModels
		}
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
