import express from 'express'
import path from 'path'
import fs from 'fs'

const PORT = process.env.PORT || 443
const app = express()

//	Serve static files
app.use(express.static('bin/site'))

//	Redirect handling
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

for(let redirect of redirects)
{
	app.get('/' + redirect.url, (_, res) =>
	{
		res.redirect(302, redirect.redirect)
	})
}

/*	Let front handle misc paths
	THIS HAS TO COME LAST
	ELSE ALL FILES RETURN CONTAINER.HTML
*/
app.get('*', (_, res) =>
{
	res.sendFile(path.join(__dirname, 'site/index.html'))
})

app.listen(PORT, () =>
{
	console.log(`Listening on port ${PORT}`)
	console.log(`Running at ${__dirname}`)
})