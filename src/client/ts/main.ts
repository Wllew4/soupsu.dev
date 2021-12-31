import { loadError } from './error'
import { createApp, h } from 'vue';
import Home from '../components/Home.vue'

function updateBody ()
{
    switch(getUrl(window.location.pathname, 1))
    {
        case '':
			createApp({
				render: ()=>h(Home)
			}).mount('body')
            break;
        default:
			loadError(404, 'Unable to locate<br>' + window.location.href);
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