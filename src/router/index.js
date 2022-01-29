
import Vue from 'vue';
import VueRouter from 'vue-router';

import AccountPayments from "../views/AccountPayments";
import AccountPersonalInfo from "../views/AccountPersonalInfo";
import AutoSearch from "../views/AutoSearch";
import Error404 from "../views/Error404";
import Home from '../views/Home';
import MyChat from "../views/MyChat"
import MyMessages from "../views/MyMessages";
import MyParcelsActive from "../views/MyParcelsActive";
import MyParcelsCompleted from "../views/MyParcelsCompleted";
import ParcelSend from "../views/ParcelSend";
import ParcelTake from "../views/ParcelTake";
import Registration from "../views/Registration";
import Search from "../views/Search";
import SendOverview from "../views/SendOverview";
import SuitcaseOverview from "../views/SuitcaseOverview";
import SuitcaseSearch from "../views/SuitcaseSearch";
import TakeOverview from "../views/TakeOverview";
import Test from "../views/Test";



Vue.use(VueRouter);

const routes = [
	{
		component: AccountPersonalInfo,
		path: '/account/personal-info',
	},
	{
		component: AccountPayments,
		path: '/account/payments',
	},
	{
		component: AutoSearch,
		path: '/auto-search',
	},
	{
		component: Error404,
		path: '*',
	},
	{
		component: Home,
		path: '/',
	},
	{
		component: MyChat,
		path: '/my-chat/:id',
		props: true
	},
	{
		component: MyMessages,
		path: '/my-messages',
	},
	{
		component: MyParcelsActive,
		path: '/my-parcels-active',
	},
	{
		component: MyParcelsCompleted,
		path: '/my-parcels-completed',
	},
	{
		component: SendOverview,
		path: '/send-overview/:id',
		props: true
	},
	{
		component: TakeOverview,
		path: '/take-overview/:id',
		props: true
	},
	{
		component: ParcelSend,
		path: '/send',
	},
	{
		component: ParcelTake,
		path: '/take',
	},
	{
		component: Registration,
		path: '/registration',
	},
	{
		component: Search,
		path: '/search',
	},
	{
		component: SuitcaseOverview,
		path: '/suitcase-overview',
	},
	{
		component: SuitcaseSearch,
		path: '/suitcase-search',
	},
	{
		component: Test,
		path: '/test',
	}
]

const router = new VueRouter({
	routes,
	mode: 'history'
});

export default router;


