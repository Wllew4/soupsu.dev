import { err404 } from './error'
import error from '../pages/error.html'

function updateBody ()
{
    switch(getUrl(window.location.pathname, 1))
    {
        case '':
			require('./home')
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