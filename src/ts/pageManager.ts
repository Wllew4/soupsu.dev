import { err404 } from './error'
import { createApp, h } from 'vue'
import social_links from '../components/social-links.vue'
import home from '../pages/home.html'
import error from '../pages/error.html'

function updateBody ()
{
    switch(getUrl(window.location.pathname, 1))
    {
        case '':
			require('../scss/home.scss')
			document.getElementsByTagName("body")[0].innerHTML = home;
			createApp({ data() { return { age: 18 } } }).mount('.text');
			createApp({
				render: ()=>h(social_links)
			}).mount('#social-links');
            break;
        default:
			require('../scss/error.scss');
			document.getElementsByTagName("body")[0].innerHTML = error;
			err404(404, 'Unable to locate<br>' + window.location.href);
            break;
    }
}

function getUrl(s: string, i: number)
{
    let t = s.split('/');
    return t[i];
}

window.onpopstate = (e) =>
{
    updateBody();
}

window.onload = () =>
{
    updateBody();
}