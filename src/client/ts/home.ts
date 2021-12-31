import { createApp, h } from 'vue'

import home from '../html/home.html'
import Icon from '../components/Icon.vue'
import SocialLinks from '../components/SocialLinks.vue'

export function loadHome(): void
{
	require('../scss/home.scss')

	document.getElementsByTagName('body')[0].innerHTML = home;

	createApp({
		render: ()=>h(Icon)
	}).mount('#icon')
	
	const birthday: Date = new Date('02/03/2003')
	createApp({ data() { return {
		age: new Date().getFullYear() - birthday.getFullYear()
	}}}).mount('.text');
	
	createApp({
		render: ()=>h(SocialLinks)
	}).mount('#social-links');
}