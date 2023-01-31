import { createApp } from 'vue'
import './styles/main.scss'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

// Components
import Calendar from './components/calendar/Calendar.vue'
import Features from './components/features/Features.vue'
import CalendarSetup from './components/calendar/CalendarSetup.vue'

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
		path: '/',
		component: Calendar,
		props: {
			dayModels: dayModels,
			startTime: new Date(0, 0, 0, 9),
			endTime: new Date(0, 0, 0, 15),

		}
	},
	{
		path: '/features',
		component: Features
	},
	{
		path: '/setup',
		component: CalendarSetup
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
