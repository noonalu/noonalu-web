import { createApp } from 'vue'
import './styles/main.scss'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

// Components
import Home from './components/Home.vue'
import Calendar from './components/Calendar/Calendar.vue'


// Models
import DayModel from './models/DayModel'

// dummy data lol

const day1 = new DayModel('Mon')
const day2 = new DayModel('Tue')
const day3 = new DayModel('Fri')
const day4 = new DayModel('Sat')
const dayModels: DayModel[] = [day1, day2, day3, day4]

// Routing
const routes = [

	{
		path: '/', component: Home
	},
	{
		path: '/cal',
		component: Calendar,
		props: {
			dayModels: dayModels,
			startTime: new Date(null, null, null, 9),
			endTime: new Date(null, null, null, 15),

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
