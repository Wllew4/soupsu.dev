console.log('loaded error.js')

function err404(code: number, message: string)
{
	$('#error-code').html('Error ' + code.toString());
	$('#error-msg').html(message);
}