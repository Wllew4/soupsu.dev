import { createApp, h } from 'vue'

import home from '../pages/home.html'
import social_links from '../components/social-links.vue'

export function loadHome(): void
{
	require('../scss/home.scss')

	document.getElementsByTagName('body')[0].innerHTML = home;
	
	const birthday: Date = new Date('02/03/2003')
	createApp({ data() { return {
		age: new Date().getFullYear() - birthday.getFullYear()
	} } }).mount('.text');
	
	createApp({
		render: ()=>h(social_links)
	}).mount('#social-links');
}