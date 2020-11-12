var instances = [];

class Page {
    constructor(c_html, c_bar, c_title){
        this.html = c_html;
        this.bar = c_bar;
        this.title = c_title;
        instances.push(this);
    }
}

class Redirect {
    constructor(c_bar, c_redir){
        this.bar = c_bar;
        this.redir = c_redir;
        instances.push(this);
    }
}

function updateBody () {
    var j = 1;
    for (var i in instances){
        if('/' + instances[i].bar == window.location.pathname){
            if(instances[i].redir){
                window.location.replace(instances[i].redir);
            }
            else {
                $("#inner").empty();
                $("#inner").load("/html/" + instances[i].html);
                
                document.getElementsByTagName("Title")[0].innerHTML = "Soupsu - " + instances[i].title;
            }
        }
        else {
            j++;
        }
    }

    

    if(j > instances.length) {
        $("#inner").empty();
        $("#inner").load("/html/404.html");
        document.getElementsByTagName("Title")[0].innerHTML = "404 :/";
    }
}

function changeUrl (page){
    window.history.pushState(page, '', '/' + page.bar);
    updateBody();
}

home = new Page('home.html', '', 'Home');
charity = new Page("charity.html", "charity", "Charity");
    new Redirect('el2020', "https://www.extra-life.org/participant/Soups-2020");
projects = new Page("projects.html", "projects", "Projects");
new Page("stream/countdown.html", "cd", "Countdown");
new Page("stream/progress.html", "pb", "Progress Bar");

window.onpopstate = (event) => {
    updateBody();
}

window.onload = () => {
    updateBody();
}