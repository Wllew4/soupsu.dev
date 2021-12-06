import * as https from 'http'
import * as fs from 'fs'
import * as path from 'path'

type Redirect =
{
    url: string,
    redirect: string
}

let redirects: Redirect[] = JSON.parse(
    fs.readFileSync(
        'redirects.json',
        { encoding: 'utf8' }
    ));

function getContentType(file: string) : string
{
    let extname     = path.extname(file);
    let contentType = 'text/html';
    switch (extname)
    {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;      
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.svg':
            contentType = 'image/svg+xml';
            break;
        case '.GIF':
            contentType = 'image/gif';
            break;
        case '.wav':
            contentType = 'audio/wav';
            break;
        case '.txt':
            contentType = 'text/plain';
            break;
    }
    return contentType;
}

https.createServer(function(req, res)
{
    let filePath = './build/site' + req.url;
    let contentType = getContentType(filePath);

    for(let redirect of redirects)
        if('/' + redirect.url == req.url)
        {
            res.writeHead(302, { 'Location': redirect.redirect });
            res.end();
        }
    
    fs.readFile(filePath, function(err, dat)
    {
        if(!err)
        {
            //  Return file if found
            res.writeHead(200, {'Content-Type': contentType});
            res.write(dat, 'utf-8');
            res.end();
        }
        else
        {
            //  Let frontend handle non-file/unknown file requests
            fs.readFile('build/site/html/container.html', function(err, dat)
            {
                if(err)
                {
                    console.log('Failed to load container.html!!' + err);
                    res.end();
                }
                else
                {
                    res.writeHead(200, {'Content-Type': contentType});
                    res.write(dat, 'utf-8');
                    res.end();
                }
            });
        }
    });
    
}).listen(process.env.PORT || 443);