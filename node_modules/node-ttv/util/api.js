const {Get} = require("./web-requests/get");
const {Post} = require("./web-requests/post");
const {Patch} = require("./web-requests/patch");
const {Delete} = require("./web-requests/delete");
const {getOauth} = require("./getOauth");

exports.apiGet = async (path, queryParams) => {
    let reqPath = path + "?";

    for(key in queryParams){
        if(queryParams[key] != ""){
            reqPath += "&" + key + "=" + queryParams[key];
        }
    }

    TOKEN = await getOauth();
    try {
        const response = await Get(
            "api.twitch.tv",
            reqPath,
            {
                "Authorization": "Bearer " + TOKEN,
                "Client-ID": CLIENT_ID
            }
        );
    
        const json = JSON.parse(response);
        return json;
    } catch (error){
        console.log(error);
    }
};

exports.apiPost = async (path, queryParams, bodyParams) => {
    let reqPath = path + "?";

    for(key in queryParams){
        if(queryParams[key] != ""){
            reqPath += "&" + key + "=" + queryParams[key];
        }
    }

    TOKEN = await getOauth();
    try {
        const response = await Post(
            "api.twitch.tv",
            reqPath,
            JSON.stringify(bodyParams),
            {
                "Authorization": "Bearer " + TOKEN,
                "Client-ID": CLIENT_ID,
                "Content-Type": "application/json"
            }
        );
    
        const json = JSON.parse(response);
        return json;
    } catch (error){
        console.log(error);
    }
};

exports.apiPatch = async (path, queryParams, bodyParams) => {
    let reqPath = path + "?";

    for(key in queryParams){
        if(queryParams[key] != ""){
            reqPath += "&" + key + "=" + queryParams[key];
        }
    }

    TOKEN = await getOauth();
    try {
        const response = await Patch(
            "api.twitch.tv",
            reqPath,
            JSON.stringify(bodyParams),
            {
                "Authorization": "Bearer " + TOKEN,
                "Client-ID": CLIENT_ID,
                "Content-Type": "application/json"
            }
        );
    
        const json = JSON.parse(response);
        return json;
    } catch (error){
        console.log(error);
    }
};

exports.apiPut = async (path, queryParams, bodyParams) => {
    let reqPath = path + "?";

    for(key in queryParams){
        if(queryParams[key] != ""){
            reqPath += "&" + key + "=" + queryParams[key];
        }
    }

    TOKEN = await getOauth();
    try {
        const response = await Post(
            "api.twitch.tv",
            reqPath,
            JSON.stringify(bodyParams),
            {
                "Authorization": "Bearer " + TOKEN,
                "Client-ID": CLIENT_ID,
                "Content-Type": "application/json"
            }
        );
    
        const json = JSON.parse(response);
        return json;
    } catch (error){
        console.log(error);
    }
};

exports.apiDelete = async (path, queryParams) => {
    let reqPath = path + "?";

    for(key in queryParams){
        if(queryParams[key] != ""){
            reqPath += "&" + key + "=" + queryParams[key];
        }
    }

    TOKEN = await getOauth();
    try {
        const response = await Delete(
            "api.twitch.tv",
            reqPath,
            {
                "Authorization": "Bearer " + TOKEN,
                "Client-ID": CLIENT_ID
            }
        );
    
        const json = JSON.parse(response);
        return json;
    } catch (error){
        console.log(error);
    }
};