const { timeElapsed, timeToString } = require("../../util/timer");
const {Twitch} = require("node-ttv");
const {broadcaster_id} = require("../../confidential");
const {ttv} = require("../ttv_responses/msgResponses");

exports.commands = {
    followage: (context, target) => {
        var options = {
            from_id: context['user-id'],
            to_id: broadcaster_id
        };
        Twitch.users.getUsersFollows(options).then( r => {
            var res;
    
            if(!r["data"][0]){
                //  User is not following
                res = ttv.followage.notFollowing;
                res = res.replace("<user>", context['display-name']);
                client.say(target, res);
            }
            else {
                //  Time calculations
                let today = new Date(new Date().toISOString());
                let startedFollowing = new Date(r["data"][0]["followed_at"]);
                elapsed = timeElapsed(today, startedFollowing);
                let string = timeToString(elapsed);
    
                // String assembly
                res = ttv.followage.success;
                res = res.replace("<user>", context['display-name']);
                res = res.replace("<t>", string);
                res = res.replace("undefined", "");
    
                //  Response
                client.say(target, res);
            }
    
            return res;
        });
    },
    uptime: (context, target) => {
        //  Check if stream is live
        var options = {
            user_login: "soupsu"
        };
        Twitch.streams.getStreams(options).then( r => {
            if(!r["data"][0]){
                let res = ttv.uptime.notLive;
                res = res.replace("<user>", context['display-name']);
                client.say(target, res);
            }
            else {
                //  Time calculations
                let startTime = new Date(r["data"][0]["started_at"]);
                let today = new Date();
                let streamTime = timeElapsed(today, startTime);
                let string = timeToString(streamTime);
    
                //  String assembly
                var res = ttv.uptime.success;
                res = res.replace("<user>", context['display-name']);
                res = res.replace("<t>", string);
                res = res.replace("undefined", "");
    
                //  Response
                client.say(target, res);
            }
        });
    },
    clip: (context, target) => {
        //  Check if stream is live
        var options = {
            user_login: "soupsu"
        };
        Twitch.streams.getStreams(options).then( r => {
            if(!r["data"][0]){
                let res = ttv.clip.notLive;
                res = res.replace("<user>", context['display-name']);
                client.say(target, res);
            }
            else {
                //  Create clip
                var options = {
                    broadcaster_id: broadcaster_id,
                    has_delay: false
                };
                Twitch.clips.createClip(options).then( s => {
                    let res = ttv.clip.success;
                    res = res.replace("<id>", s["data"][0]["id"]);
                    client.say(target, res);
                });
                
            }
        });
    }
};