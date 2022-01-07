import express from 'express'
import path from 'path'
import redirs from './redirects.json'

const PORT = process.env.PORT || 443
const app = express()

//	Serve static files
app.use(express.static('bin/client'))
// app.use(express.static('bin/client/main'))
// app.use(express.static('bin/client/error'))

//	Redirect handling
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

app.get('*', (_,res)=>
{
	res.status(404).sendFile(path.join(__dirname, '../client/index.html'))
})

app.listen(PORT, () =>
{
	console.log(`Listening on port ${PORT}`)
	console.log(`Running at ${__dirname}`)
})