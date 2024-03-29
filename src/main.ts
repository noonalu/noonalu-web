import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

// Components
import Calendar from './components/calendar/Calendar.vue'
import Features from './components/features/Features.vue'
import CalendarSetup from './components/calendar/CalendarSetup.vue'

// Models
import DayModel from './models/DayModel'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowRight)

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
		component: CalendarSetup,
	},
	{
		path: '/features',
		component: Features
	},
	{
		path: '/calendar',
		component: Calendar,
		props: {
			dayModels: dayModels,
			startTime: new Date(0, 0, 0, 9),
			endTime: new Date(0, 0, 0, 15),
		}
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
