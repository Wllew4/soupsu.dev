# node-ttv
A Node.js wrapper for Twitch.tv's helix API.
This package can help developers exchange data with Twitch without the headache of web requests.
As of right now (v1.0.3), this package is very new, and not all features have been tested, but they *should* work.

## Sample Code
```js
const {Twitch} = require("node-ttv");

Twitch.init(REFRESH_TOKEN, CLIENT_ID, SECRET);

var options = {
  broadcaster_id: BROADCASTER_ID,
  has_delay: false
};
Twitch.clips.createClip(options);
//  Creates a clip on the specified channel

var options2 = {
  name: "Overwatch"
};
Twitch.games.getGames(options2).then((r)=> {
  console.log(r);
  //  Prints an object containing data about Overwatch, as described in Twitch's API documentation.
});
```

## Getting Started

### Installing the Package
Install using [`npm`](https://docs.npmjs.com/).
```sh
npm i node-ttv
```

### Importing & Registering Your Application
First, import node-ttv into your project. All functionality in this package can be accessed through the `Twitch` object.
```js
const {Twitch} = require("node-ttv");
```

Next, the `Twitch` object must be initialized with your `refresh token`, `client id`, and `secret`.

You can obtain your `client id` and `secret` by registering an application with Twitch [here](https://dev.twitch.tv/console/apps/create).
Use whatever name you like, and for the OAuth Redirect URL, enter `http://localhost/`.
Once you create the app, you should see your `client id` and be given the option to create a new `secret`.

Open this url in your browser. Replacing `CLIENT_ID` with the `client id` for your registered application. Replace `SCOPES` with a list of scopes separated by `+`. To figure out which scopes your application will need, refer to [Twitch's documentation](https://dev.twitch.tv/docs/api/reference).

`https://id.twitch.tv/oauth2/authorize?response_type=code&redirect_uri=http://localhost/&client_id=`CLIENT_ID`&scope=`SCOPES

As an example, a URL may look like this:

`https://id.twitch.tv/oauth2/authorize?response_type=code&redirect_uri=http://localhost/&client_id=xdfitb1fcc3axffemy5r7b56k0pp8z&scope=channel:edit:commercial+channel:manage:redemptions+clips:edit`

Authorize your app for those scopes. You will then be redirected to what looks like a broken page. Check the url, and you will find it takes this form:
`http://localhost/?code=`OAUTH CODE`&scope=`SCOPES

Copy this `OAUTH CODE` somewhere because you will need it for the next step.

As a one-time set up step, you will need to use the `getRefreshToken` method to get your refresh token. Add this line to your code:
```js
Twitch.getRefreshToken(OAUTH_CODE, CLIENT_ID, SECRET);
```
This will log your refresh token to the console. Once you have this token copied, you can remove this line from your code.

Finally, initialize Twitch with your `refresh token`, `client id`, and `secret`.
```js
Twitch.init(REFRESH_TOKEN, CLIENT_ID, SECRET);
```
Now you're ready to use node-ttv!

## Usage
All requests follow patterns given in [Twitch's API documentation](https://dev.twitch.tv/docs/api/reference).
Functionality is sorted by the resource type provided, i.e. Bits, Channel Points, Moderation, etc.

### Sending requests
A method will either need query parameters, body parameters, or both. The wrapper accepts these parameters as objects. For example:
```js
var queryParameters = {
  broadcaster_id: BROADCASTER_ID
};

var bodyParameters = {
  title: "My awesome channel points reward",
  cost: "420"
};

Twitch.channelPoints.createCustomRewards(queryParameters, bodyParameters);
```

### Receiving data
Since node-ttv makes web requests using promises, data received from Twitch must be accepted using the `.then` method on the function. For example:
```js
var options2 = {
  name: "Overwatch"
};
Twitch.games.getGames(options2).then((r)=> {
  console.log(r);
  //  r is an object returned by the getGames method. It contains the response from Twitch.
  /*
    {
      data: [
        {
          id: '488552',
          name: 'Overwatch',
          box_art_url: 'https://static-cdn.jtvnw.net/ttv-boxart/Overwatch-{width}x{height}.jpg'
        }
      ]
    }
  */
});
```
