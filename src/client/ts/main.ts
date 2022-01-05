import { loadError } from './error'
import { createApp, h } from 'vue';

import MainPage from '../components/MainPage.vue'

function updateBody ()
{
    switch(getUrl(window.location.pathname, 1))
    {
        case '':
		case 'projects':
			createApp(
				{
					render: ()=>h(MainPage)
				}).mount('body')
            break;
        default:
			loadError(404, 'Unable to locate ' + window.location.href);
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