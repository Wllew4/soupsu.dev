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

    buildRefs();
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

function buildRefs () {
    refs = JSON.parse(fs.readFileSync("./src/html/templates/refs.json"));

    fs.writeFileSync('./src/html/art/ref.html', '');
    fs.appendFileSync('./src/html/art/ref.html', fs.readFileSync('./src/html/templates/reftemp.html', 'utf8'));

    for (var j in refs){
        fs.appendFileSync('./src/html/art/ref.html',
        '<button type="button" class="collapsible fadeOnHover"'
        + 'style="background-color: '
        + refs[j]["Colors"][0] + ';');
        

        var rgb1 = hexToRgb(refs[j]["Colors"][0]);
        var p1 = ((rgb1.r * 0.2126) + (rgb1.g * 0.7152) + (rgb1.b * 0.0722)) / 255;
        var l1 = (p1 - 0.5) * -10000;

        if(l1 > 0){
            fs.appendFileSync('./src/html/art/ref.html', ' color: white; ');
        }
        else {
            fs.appendFileSync('./src/html/art/ref.html', ' color: black; ');
        }

        fs.appendFileSync('./src/html/art/ref.html',
        '">'
        + refs[j]["Name"]
        + '</button>'
        + '<div class="content">'
        + '<img class="side left" src="/img/refs/'
        + refs[j]["File"]
        + '"></img>'
        + '<div class="side right">'
        );

        for(var k in refs[j]["Colors"]){
            var rgb = hexToRgb(refs[j]["Colors"][k]);
            var p = ((rgb.r * 0.2126) + (rgb.g * 0.7152) + (rgb.b * 0.0722)) / 255;
            var l = (p - 0.5) * -10000;

            fs.appendFileSync('./src/html/art/ref.html', '<div class="color ');

            if(l > 0){
                fs.appendFileSync('./src/html/art/ref.html', ' whiteText ');
            }

            fs.appendFileSync('./src/html/art/ref.html', 
            ' clickable" data-clipboard-text="'
            + refs[j]["Colors"][k]
            + '">'
            + refs[j]["Colors"][k]
            + '</div>'
            );
        }

        fs.appendFileSync('./src/html/art/ref.html',
            '</div></div>'
        );
    }

    buildSocials(site["Socials"], './src/html/art/ref.html');
}

function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });
  
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }