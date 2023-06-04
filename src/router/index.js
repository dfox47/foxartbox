import {createRouter, createWebHistory} from 'vue-router'

import Blog         from '../views/Blog'
import Error404     from '../views/Error404'
import Home         from '../views/Home'
import Table        from '../views/Table'

const routes = [
	{
		component: Blog,
		name: 'Blog',
		path: '/blog'
	},
	{
		component: Error404,
		name: 'Error404',
		path: '/:pathMatch(.*)*'
	},
	{
		component: Home,
		name: 'Home',
		path: '/'
	},
	{
		component: Table,
		name: 'Table',
		path: '/table'
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	sensitive: false
})

export default router