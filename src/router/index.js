import {createRouter, createWebHistory} from 'vue-router'

import Blog from '../views/Blog'
import Home from '../views/Home'
import Table from '../views/Table'

const routes = [
	{
		component: Blog,
		name: 'Blog',
		path: '/blog/'
	},
	{
		component: Home,
		name: 'Home',
		path: '/'
	},
	{
		component: Table,
		name: 'Table',
		path: '/table/'
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router