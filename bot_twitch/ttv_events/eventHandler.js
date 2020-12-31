const { eventResponses } = require("../ttv_responses/eventResponses");

const {refresh_token, client_id, secret, broadcaster_id} = require("../../confidential");
const {Twitch} = require("node-ttv");
Twitch.init(refresh_token, client_id, secret);

function getTier (method) {
    if(method.prime){
        return "with Prime";
    }
    switch (method.plan){
        case 1000:
            return "at Tier 1";
        case 2000:
            return "at Tier 2";
        case 3000:
            return "at Tier 3";
    }
}

var cachedFollower;
var newFollows = 0;

setInterval(() => {
    var options = {
        first: 1,
        to_id: broadcaster_id
    };
    Twitch.users.getUsersFollows(options).then( r => {
        var recentFollower = r.data[0].from_name;
        if(recentFollower != cachedFollower){
            var res = eventResponses.follow;
            res = res.replace("<user>", recentFollower);
            if(newFollows == 1){
                client.say("#soupsu", res);
            }
            else {
                newFollows++;
            }
            cachedFollower = recentFollower;
        }
    });
}, 5000);

exports.eventHandler = {
    initListeners: () => {
        client.on('hosted', exports.eventHandler.hosted);
        client.on('subscription', exports.eventHandler.subscription);
        client.on('resub', exports.eventHandler.resub);
        client.on('subgift', exports.eventHandler.subgift);
        client.on('submysterygift', exports.eventHandler.submysterygift);
        client.on('cheer', exports.eventHandler.cheer);
        client.on('raided', exports.eventHandler.raided);
        client.on('ban', exports.eventHandler.ban);
    },


    hosted: (channel, username, viewers, autohost) => {
        if(autohost){ return; }
        let res = eventResponses.hosted;
        res = res.replace("<user>", username);
        res = res.replace("<viewers>", viewers + " viewer" + (viewers != 1 ? "s" : ""));
        client.say("#soupsu", res);
    },
    subscription: (channel, username, method, message, userstate) => {
        let res = eventResponses.subscription;
        res = res.replace("<user>", username);
        res = res.replace("<tier>", getTier(method));
        client.say("#soupsu", res);
    },
    resub: (channel, username, months, message, userstate, methods) => {
        let res = eventResponses.resub;
        res = res.replace("<user>", username);
        res = res.replace("<t>", (months != 0 ? (" for " + months + " months") : ""));
        res = res.replace("<tier>", getTier(methods));
        client.say("#soupsu", res);
    },
    subgift: (channel, username, streakMonths, recipient, methods, userstate) => {
        let res = eventResponses.subgift;
        res = res.replace("<gifter>", username);
        res = res.replace("<tier>", getTier(methods));
        res = res.replace("<recipient>", recipient);
        client.say("#soupsu", res);
    },
    submysterygift: (channel, username, numbOfSubs, methods, userstate) => {
        let res = eventResponses.submysterygift;
        res = res.replace("<gifter>", username);
        res = res.replace("<number>", numbOfSubs);
        res = res.replace("<tier>", getTier(methods));
        client.say("#soupsu", res);
    },
    cheer: (channel, userstate, message) => {
        let res = eventResponses.cheer;
        res = res.replace("<user>", username);
        res = res.replace("<number>", userstate.bits);
        client.say("#soupsu", res);
    },
    raided: (channel, username, viewers) => {
        let res = eventResponses.raided;
        res = res.replace("<user>", username);
        res = res.replace("<viewers>", viewers + "viewer" + (viewers != 1 ? "s" : ""));
        client.say("#soupsu", res);
    },
    ban: (channel, username, reason, userstate) => {
        let res = eventResponses.ban;
        res = res.replace("<user>", username);
        client.say("#soupsu", res);
    }
};