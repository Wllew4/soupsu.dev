exports.AURA = (requrl) => {
    if(requrl == '/gamer.html'){
        addPlayer();
    }
    else if(requrl == '/assignRoles'){
        assignRoles();
    }
    else if(requrl == '/clearPlayers'){
        clearPlayers();
    }
};

const fs = require('fs');

var players = [];
var connections = 0;

var roles = JSON.parse(fs.readFileSync('./AURoles.json', 'utf8'));

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

addPlayer = _ => {
    var newPlayer = {
        id: connections,
        message: ""
    };
    players.push(newPlayer);
    connections++;
    fs.writeFileSync('./src/gamer.json', JSON.stringify(players));
};

assignRoles = _ => {
    players = JSON.parse(fs.readFileSync('./src/gamer.json', 'utf8'));

    roundsRoles = getRandom(roles, players.length);

    for(var i in players){
        players[i]["message"] = roundsRoles[i];
    }
    fs.writeFileSync('./src/gamer.json', JSON.stringify(players));
};

clearPlayers = _ => {
    players = [];
    connections = 0;
}