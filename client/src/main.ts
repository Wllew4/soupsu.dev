import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import MainPage from './pages/MainPage.vue'
import Err from './pages/Error.vue'

const routes =
[
	{
		path: '/',
		alias: '/projects',
		component: MainPage
	},
	{
		path: '/:catchAll(.*)',
		component: Err
	},
]

let router = createRouter
({
	history: createWebHistory(),
	routes
})

createApp(App).use(router).mount('body')