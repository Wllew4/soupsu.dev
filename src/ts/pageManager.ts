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
            $("body").load("/html/404.html");
            break;
    }
}

function getUrl(s: any, i: any)
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