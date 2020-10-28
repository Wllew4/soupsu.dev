$(document).on('click', '.navbtn', function () {
    $('#content').addClass('animate_out');
    $('#inner').fadeOut(100).delay(1500).fadeIn();

    setTimeout(function () {
        $('#content').removeClass('animate_out');
    }, 3000);
});

function transitionTo (page) {
    setTimeout(function () {
        changeUrl(page);
    }, 1500);
}

var rtime;
var timeout = false;
var delta = 150;

window.onresize = () => {
    $('.transitionFix').get(0).style.setProperty('transition-duration', '0s');
    $('.transitionFix').get(1).style.setProperty('transition-duration', '0s');

    rtime = new Date();
    if (timeout === false) {
        timeout = true;
        setTimeout(resizeend, delta);
    }
}

function resizeend() {
    if (new Date() - rtime < delta) {
        setTimeout(resizeend, delta);
    } else {
        timeout = false;
        $('.transitionFix').get(0).style.setProperty('transition-duration', '0.4s');
        $('.transitionFix').get(1).style.setProperty('transition-duration', '0.4s');
    }               
}