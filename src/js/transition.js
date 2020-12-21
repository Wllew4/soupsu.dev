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

var fixedTransitions = document.getElementsByClassName("transitionFix");

window.onresize = () => {
    
    for(var i = 0; i < fixedTransitions.length; i++){
        fixedTransitions[i].style['transition-duration'] = '0s';
    }

    rtime = new Date();
    if (timeout === false) {
        timeout = true;
        setTimeout(resizeend, delta);
    }

    // let footer = document.getElementsByClassName('foot')[0];
    // if(window.innerWidth <= 767){
    //     footer.classList.remove("footer");
    // }
    // else {
    //     footer.classList.add("footer");
    // }
}

function resizeend() {
    if (new Date() - rtime < delta) {
        setTimeout(resizeend, delta);
    } else {
        timeout = false;
        for(var i =0; i < fixedTransitions.length; i++){
            fixedTransitions[i].style['transition-duration'] = '0.4s';
        }
    }               
}