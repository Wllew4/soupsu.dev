import { createApp, h } from 'vue'

import home from '../html/home.html'
import social_links from '../components/social-links.vue'

for(let i = 1; i < 6; i++)
{
	require('../img/home/icons/felix' + i + '.webp');
}

export function loadHome(): void
{
	require('../scss/home.scss')

	document.getElementsByTagName('body')[0].innerHTML = home;

	const icon = 'felix' + Math.floor(Math.random() * 5 + 1) + '.webp'
	createApp({ data() { return {
		icon: icon
	}}}).mount('#icon')
	
	const birthday: Date = new Date('02/03/2003')
	createApp({ data() { return {
		age: new Date().getFullYear() - birthday.getFullYear()
	}}}).mount('.text');
	
	createApp({
		render: ()=>h(social_links)
	}).mount('#social-links');
}