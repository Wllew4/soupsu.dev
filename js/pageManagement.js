//Navbar resizing on scroll
window.onscroll = function () {
    var navitems = document.getElementsByClassName("navitem");
    var subnavitems = document.getElementsByClassName("subnavitem");
    if(document.body.scrollTop > 57 || document.documentElement.scrollTop > 57){
        document.getElementsByClassName("navbar")[0].style.padding = "10px 10px";
        for (var i = 0; i < navitems.length; i++){
            navitems[i].style.fontSize = "30px";
        }
    }
    else {
        document.getElementsByClassName("navbar")[0].style.padding = "40px 10px";
        for (var i = 0; i < navitems.length; i++){
            navitems[i].style.fontSize = "40px";
        }
        for (var i = 0; i < subnavitems.length; i++){
            subnavitems[i].style.fontSize = "30px";
        }
    }
}

var updating = false;

//Change pages
function updateBody(page){
    window.history.pushState(page, '', '/' + page);
    updateContent(page);
}

function updateContent(page){
    $("#content").empty();
    $("#content").load("/html/" + page + ".html");

    if(page == 'live'){
        $("#stream").load("/html/stream.html");
    }
    else {
        $("#stream").empty();
    }
}

window.onpopstate = function (){
    updateContent(window.location.pathname.substring(1));
}

window.onload = function () {

    //Load content of initial page
    var path = window.location.pathname.substring(1);
    if(path == ''){
        path = 'home';
    }
    updateBody(path);

    $('#nav').load("/html/navbar.html");

    //Show stream at top of page if live
    $.ajax({
        url: 'https://api.twitch.tv/kraken/streams/139982308',
        dataType: 'json',
        headers: {
            'Accept': 'application/vnd.twitchtv.v5+json',
            'Client-ID': 'rnfcnsnpo0ol1jktcr2fa2x79hch3z'
        },
        success: function (data){
            if(data["stream"] != null){
                $("#stream").load("/html/stream.html");
            }
        }
    });
}