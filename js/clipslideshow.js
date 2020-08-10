var current = 0;
var clip = [
    "DifficultCleanPonyArgieB8",
    "ImpartialExpensiveRavenOptimizePrime",
    "CalmFancyKimchiANELE",
    "CharmingAgreeableCheeseJonCarnage",
    "CuriousSmilingPotatoVoteYea",
    "PluckySlickPotPartyTime",
    "NaiveAmazonianPicklesCclamChamp",
    "SlickJoyousApePartyTime",
    "TawdryTolerantOpossumFloof",
    "TsundereFantasticSmoothieBibleThump",
    "BlightedBelovedBoarYouDontSay",
    "AmorphousStylishBunnyTinyFace",
    "AffluentFrailTrianglePJSalt"
]

function changeClip (i) {
    current  += i;
    if(current > clip.length - 1){
        current = 0;
    }
    if(current < 0){
        current = clip.length - 1;
    }
    document.getElementById("clipplayer").setAttribute("src", "https://clips.twitch.tv/embed?parent=soupsu.live&autoplay=false&muted=false&clip=" + clip[current]);
}

function setClip (i){
    document.getElementById("clipplayer").setAttribute("src", "https://clips.twitch.tv/embed?parent=soupsu.live&autoplay=false&muted=false&clip=" + clip[i]);
}

document.getElementById("clipplayer").setAttribute("src", "https://clips.twitch.tv/embed?parent=soupsu.live&autoplay=false&muted=false&clip=DifficultCleanPonyArgieB8");