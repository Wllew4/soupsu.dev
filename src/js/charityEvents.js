$.getJSON('/json/charity.json', (data) => {

    var template = document.getElementsByTagName("template")[0].content.querySelector('div');

    for (var i=0; i < data.upcoming.length; i++){
        elem = document.importNode(template, true);

        elem.getElementsByClassName('title').item(0).innerHTML = data.upcoming[i].title;
        elem.getElementsByClassName('title').item(0).setAttribute("href", data.upcoming[i]["donation link"]);
        elem.getElementsByClassName('subtitle').item(0).innerHTML = data.upcoming[i].date + "<br>Benefitting <a target='_blank' href='" + data.upcoming[i]['bene-link'] + "'>" + data.upcoming[i].benefitting + "</a>";
        elem.getElementsByTagName('a').item(2).setAttribute("href", data.upcoming[i]["donation link"]);
        elem.getElementsByTagName('a').item(2).setAttribute("target", "_blank");

        document.getElementById('upcoming').appendChild(elem);
    }

    for (var i=0; i < data.previous.length; i++){
        elem = document.importNode(template, true);

        elem.getElementsByClassName('title').item(0).innerHTML = data.previous[i].title;
        elem.getElementsByTagName('a').item(0).classList.remove("title");
        elem.getElementsByTagName('a').item(0).classList.add("title-nolink");
        elem.getElementsByClassName('subtitle').item(0).innerHTML = data.previous[i].date + "<br>Benefitting <a target='_blank' href='" + data.previous[i]['bene-link'] + "'>" + data.previous[i].benefitting + "</a>";
        
        var total = elem.getElementsByClassName('donobutton').item(0);

        total.classList.remove('donobutton');
        total.classList.remove('clickable');
        total.classList.remove('fadeOnHover');
        total.classList.add('donototal');
        total.innerHTML = "$" + data.previous[i].total;

        document.getElementById('previous').appendChild(elem);
    }
});