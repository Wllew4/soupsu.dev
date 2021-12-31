import { loadHome } from './home'
import { loadError } from './error'

function updateBody ()
{
    switch(getUrl(window.location.pathname, 1))
    {
        case '':
			loadHome();
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