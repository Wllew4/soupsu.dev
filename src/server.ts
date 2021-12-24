import express from 'express'
import path from 'path'
import fs from 'fs'

const PORT = process.env.PORT || 443
const app = express()

//	Let front handle misc paths
app.get('*', (_, res) =>
{
	res.sendFile(path.join(__dirname, 'site/html/container.html'))
})

//	Serve static files
app.use(express.static('build/site'))

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

app.listen(PORT, () =>
{
	console.log(`Listening on port ${PORT}`)
	console.log(`Running at ${__dirname}`)
})