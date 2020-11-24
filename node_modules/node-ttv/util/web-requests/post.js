const https = require("https");

exports.Post = (hostname, path, postData, headers) => {
    return new Promise((resolve, reject) => {
        const options = {
            method: "POST",
            hostname,
            path,
            port: 443,
            headers
        };

        const req = https.request(options, res => {
            res.setEncoding("utf8");
            let returnData = "";

            res.on('data', chunk => {
                returnData += chunk;
            });

            res.on('end', () => {
                if( res.statusCode < 200 || res.statusCode >= 300){
                    reject(returnData);
                }
                else {
                    resolve(returnData);
                }
            });

            res.on('error', err => {
                reject(err);
            });
        });

        if(postData){
            req.write(postData);
        }

        req.end();
    });
}