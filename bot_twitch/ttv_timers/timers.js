const {socials} = require("../ttv_responses/socialsResponses");
const {extraTimers} = require("../ttv_responses/extraTimers");

var messages = [];

for(i in socials){
    messages.push(socials[i]);
}

for(i in extraTimers){
    messages.push(extraTimers[i]);
}

global.messageCounter = 0;

var j = 0;

setInterval(() => {

    if(messageCounter >= 5){
        client.say("#soupsu", messages[j]);
        
        j++;
        if(j >= messages.length){ j = 0; }
        messageCounter = 0;
    }

}, 1000 * 60 * 5);