import { createApp, h } from 'vue';

import MainPage from '../components/MainPage.vue'
import Err from '../components/Error.vue'

function updateBody ()
{
    switch(getUrl(window.location.pathname, 1))
    {
        case '':
		case 'projects':
			createApp({
					render: ()=>h(MainPage)
				}).mount('body')
            break;
        default:
			createApp({
					render: ()=>h(Err)
				},
				{
					code: 404,
					message: 'Unable to locate ' + window.location.href
				}).mount('body')
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