import express from 'express'
import path from 'path'
import https from 'https'
import fs from 'fs'
import redirs from './redirects.json'

const PORT = 80
const app = express()

//	Serve static files
app.use(express.static('bin/client'))

/*	Redirect handling  */
interface Redirect
{
    url: string,
    redirect: string
}

let redirects: Redirect[] = redirs as Redirect[]

for(let redirect of redirects)
{
	app.get('/' + redirect.url, (_, res) =>
	{
		res.redirect(302, redirect.redirect)
	})
}

/*  Main landing pages  */
app.get(['/', '/projects'], (_, res) =>
{
	res.sendFile(path.join(__dirname, '../client/index.html'))
})

/*	404  */
app.get('*', (_,res)=>
{
	res.status(404).sendFile(path.join(__dirname, '../client/index.html'))
})

// app.listen(PORT, () =>
// {
// 	console.log(`Listening on port ${PORT}`)
// 	console.log(`Running at ${__dirname}`)
// })

const server = https.createServer({
	key: fs.readFileSync('key'),
	cert: fs.readFileSync('cert')
}, app)

server.listen(443, () =>
{
	console.log(`Listening on port ${PORT}`)
	console.log(`Running at ${__dirname}`)
})