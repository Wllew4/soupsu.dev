function updateBody () {
    switch(getUrl(window.location.pathname, 1)){
        case '':
            $("body").empty();
            $("body").load("/html/home.html");
            break;
        case 'janelle':
            $("body").empty();
            $("body").load("/html/janelle.html");
            break;
        default:
            $("body").empty();
            $("body").load("/html/404.html");
            break;
    }
}

function getUrl(s,i){
    t = s.split('/');
    return t[i];
}

window.onpopstate = (event) => {
    updateBody();
}

window.onload = () => {
    updateBody();
}