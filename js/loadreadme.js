$.ajax({
    url: 'https://api.github.com/repos/Wllew4/VolumeController/readme',
    dataType: 'jsonp',
    success: function (data){
        var readme = atob(data['data']['content']);

        var converter = new showdown.Converter();

        var html = converter.makeHtml(readme);

        var intro = readme.substring(readme.indexOf("What is it?") + 12, readme.indexOf("### Getting Started"));
        var gettingStarted = readme.substring(readme.indexOf("Getting Started") + 16, readme.indexOf("### Getting it Running"));
        var gettingRunning = readme.substring(readme.indexOf("Getting it Running") + 19, readme.indexOf("### How does it work?"));
        var howItWorks = readme.substring(readme.indexOf("How does it work?") + 18);
        

        intro = converter.makeHtml(intro);
        gettingStarted = converter.makeHtml(gettingStarted);
        gettingRunning = converter.makeHtml(gettingRunning);
        howItWorks = converter.makeHtml(howItWorks);

        document.getElementById("intro").innerHTML = intro;
        if(window.location.pathname == '/projects/volume-controller'){
            document.getElementById("gettingStarted").innerHTML = gettingStarted;
            document.getElementById("gettingRunning").innerHTML = gettingRunning;
            document.getElementById("howItWorks").innerHTML = howItWorks;
        }

        var links = document.getElementsByTagName("a");
        for(var i = 0; i < links.length; i++){
            links[i].setAttribute("target", "_blank");
        }
    }
});