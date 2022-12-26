import {createRouter, createWebHistory} from 'vue-router'

import Blog from '../views/Blog'
import Home from '../views/Home'

const routes = [
	{
		component: Home,
		name: 'Home',
		path: '/'
	},
	{
		component: Blog,
		name: 'Blog',
		path: '/blog/'
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router