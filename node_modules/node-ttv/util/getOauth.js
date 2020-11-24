const {Post} = require("./web-requests/post");

exports.getOauth = async () => {
    let path = "/oauth2/token?grant_type=refresh_token&refresh_token="
        + REFRESH_TOKEN
        + "&client_id=" + CLIENT_ID
        + "&client_secret=" + SECRET;
    
    const response = await Post(
        "id.twitch.tv",
        path,
        undefined,
        undefined
    );
    const json = JSON.parse(response);
    
    OAUTH = json.access_token;

    return OAUTH;
}