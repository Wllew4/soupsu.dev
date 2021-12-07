function updateBody ()
{
    switch(getUrl(window.location.pathname, 1))
    {
        case '':
            $("body").empty();
            $("body").load("/html/home.html");
            break;
        default:
            $("body").empty();
            $("body").load("/html/error.html",
				_=>{
					err404(
						404,
						'Unable to locate<br>' + window.location.href
					)}
				);
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