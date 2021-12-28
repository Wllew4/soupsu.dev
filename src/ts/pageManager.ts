import { err404 } from './error'
import { createApp } from 'vue'
const social_links = require('../components/social-links.vue')

function updateBody ()
{
    switch(getUrl(window.location.pathname, 1))
    {
        case '':
			require('../scss/home.scss')
			document.getElementsByTagName("body")[0].innerHTML = require("../pages/home.html").default;
			// document.getElementById("social-links")!.innerHTML = require("../components/social-links.html").default;
			createApp({ data() { return { age: 18 } } }).mount('.text');
			createApp(social_links).mount('#social-links');
            break;
        default:
			require('../scss/error.scss');
			document.getElementsByTagName("body")[0].innerHTML = require("../pages/error.html").default;
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