const fs = require('fs');

exports.run = () => {
    //Open JSON
    site = JSON.parse(fs.readFileSync("./site.json"));

    //Clean home and page registry
    fs.writeFileSync("./src/html/home.html", '');
    fs.writeFileSync("./src/js/pages.js", '');
    

    fs.appendFileSync("./src/html/home.html", fs.readFileSync("./src/html/templates/pagetemp.html", 'utf8'));

    buildPage(site["Buttons"], "./src/html/home.html", "");
    fs.appendFileSync("./src/js/pages.js", "home = new Page('home.html', '', 'Home');");
};

function buildPage (elArray, file, parent) {
    if(file != "./src/html/home.html"){
        fs.appendFileSync(file, '<img onclick="transitionTo(home)" src="/img/me2.png" draggable="false" class="clickable fadeOnHover transitionFix navbtn"></img></span>');
    }
    else {
        fs.appendFileSync(file, '<img src="/img/me2.png" draggable="false"></img></span>');
    }

    fs.appendFileSync(file, "<span class='right-side side'><div>");
    for(var i in elArray){
        j = elArray[i];
        if(j["Link"]){
            fs.appendFileSync(file,
            '<a target="_blank" href="' + j["Link"] + '"'
            + '><button class="homebtn clickable fadeOnHover transitionFix">'
            + j["Text"]
            + '</button></a>\n');
        }
        else if(j["Nav"]){
            //add link
            fs.appendFileSync(file,
            '<button onclick="transitionTo(' + j["url"]
            + ')" class="navbtn homebtn clickable fadeOnHover transitionFix">'
            + j["Text"]
            + '</button>\n');

            //create page html
            fs.writeFileSync("./src/html/" + j["url"] + ".html", "");
            fs.copyFileSync("./src/html/templates/pagetemp.html", "./src/html/" + j["url"] + ".html");

            //add page to registry
            var source;
            parent ? (source = parent + "/" + j["url"] + ".html', ") : (source = j["url"] + ".html', ");
            fs.appendFileSync("./src/js/pages.js", j["url"]
            + " = new Page('"
            + source
            + "'" + j["url"] + "', "
            + "'" + j["Text"] + "');\n");

            buildPage(j["Nav"], "./src/html/" + j["url"] + ".html", j["url"]);
        }
        else if(j["Etc"]){
            //add link
            fs.appendFileSync(file,
            '<button onclick="transitionTo(' + j["Etc"]
            + ')" class="navbtn homebtn clickable fadeOnHover transitionFix">'
            + j["Text"]
            + '</button>\n');

            //add page to registry
            fs.appendFileSync("./src/js/pages.js", j["Etc"]
            + " = new Page('"
            + parent + "/" + j["Etc"] + ".html', "
            + "'" + parent + "/" + j["Etc"] + "', "
            + "'" + j["Text"] + "');\n");
        }
        else {
            fs.appendFileSync(file,
                '<p class="text">' + j["Text"] + '</p>\n');
        }
    }
    buildSocials(site["Socials"], file);
}

function buildSocials (socials, file) {
    fs.appendFileSync(file, "</div></span></div></div><div class='footer'><footer class='centered'>");
    for(var i in socials){
        fs.appendFileSync(file,
        "<a target='_blank' href='" + socials[i]["Link"] + "'>"
        + "<img draggable='false' class='fadeOnHover clickable socials transitionFix' "
        + "alt='" + socials[i]["Text"] + "' "
        + "src='" + socials[i]["Icon"] + "'></a>");
    }
    fs.appendFileSync(file, "</footer></div>");
}