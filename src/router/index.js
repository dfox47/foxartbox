import {createRouter, createWebHistory} from 'vue-router'

import Home from '../views/Home'

const routes = [
	{
		component: Home,
		name: 'Home',
		path: '/'
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router