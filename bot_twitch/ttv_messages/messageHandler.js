const {refresh_token, client_id, secret} = require("../../confidential");
const {Twitch} = require("node-ttv");
Twitch.init(refresh_token, client_id, secret);

const {socials} = require("../ttv_responses/socialsResponses");
const {commands} = require("./commands_TTV");


exports.messageHandler = (target, context, msg, self) => {
    if (self) { return; } // Ignore messages from the bot
    messageCounter++;
    if (!msg.trim().startsWith('!')) { return; } // Ignore non-commands

    const message = msg.trim().split(" ");

    switch (message[0]){
        case '!discord':
            client.say(target, socials.discord);
            return;
        case '!twt':
        case '!twitter':
            client.say(target, socials.twitter);
            return;
        case '!yt':
        case '!youtube':
            client.say(target, socials.youtube);
            return;
        
        
        case '!followage':
            commands.followage(context, target);
            return;
        case '!uptime':
            commands.uptime(context, target);
            return;
        case '!clip':
            commands.clip(context, target);
            return;
        case '!prob':
            client.say(target, `${!!message[1] && Math.random() <= message[1]}`);
            return;
        case '!roll':
            client.say(target, `${Math.floor(Math.random()*message[1]) + 1}`);
            return;
    }

    console.log(`* Unknown command ${msg.trim()}`);
}