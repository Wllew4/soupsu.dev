import { createApp } from 'vue'
import error from '../pages/error.html'

export function loadError(code: number, message: string)
{
	require('../scss/error.scss');
	document.getElementsByTagName('body')[0].innerHTML = error;
	createApp({ data() { return {
		error_code: code,
		error_msg: message
	} } }).mount('#error');
}