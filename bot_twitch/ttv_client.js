const tmi = require('tmi.js');

const {oauth} = require("../confidential");
const {connectionHandler} = require("../util/connectionHandler");
const {eventHandler} = require("./ttv_events/eventHandler");
const {messageHandler} = require("./ttv_messages/messageHandler");

exports.initClient = () => {
    //  Define configuration options
    const options = {
        identity: {
            username: "Soupsu",
            password: oauth
        },
        channels: [
            "Soupsu"
        ]
    };
    //  Create a client with our options
    global.client = new tmi.client(options);
    
    //  Register our event handlers (defined below)
    client.on('connected', connectionHandler.onConnect);
    client.on('disconnected', connectionHandler.onDisconnect);
    
    client.on('message', messageHandler);
    
    eventHandler.initListeners();
    
    //  Connect to Twitch:
    client.connect();
};