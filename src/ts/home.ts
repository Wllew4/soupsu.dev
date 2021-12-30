import { createApp, h } from 'vue'

require('../scss/home.scss')

import home from '../pages/home.html'
document.getElementsByTagName("body")[0].innerHTML = home;

const birthday: Date = new Date('02/03/2003')
createApp({ data() { return {
	age: new Date().getFullYear() - birthday.getFullYear()
} } }).mount('.text');

import social_links from '../components/social-links.vue'
createApp({
	render: ()=>h(social_links)
}).mount('#social-links');