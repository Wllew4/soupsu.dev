import express from 'express'
import path from 'path'
import https from 'https'
import http from 'http'
import fs from 'fs'
import createRedirects from './redirects'

// server configuration
const PUBLIC_PATH = '../client/public'
const REDIRECTS_PATH = 'redirects.json'

// network configuration
const DEV_PORT = 8000
const KEY_PATH = 'key'
const CERT_PATH = 'cert'

// other constants
const production = () => process.env.NODE_ENV != 'dev' 
const app = express()
const protocol = production() ? https : http
const config = production() ? {
	key: fs.readFileSync(KEY_PATH),
	cert: fs.readFileSync(CERT_PATH)
} : {}


function main()
{
	createRedirects(app, REDIRECTS_PATH)

	// static files
	app.use(express.static(PUBLIC_PATH))

	// Let client handle routing
	app.get('*', (_,res) =>
	{
		res.status(200).sendFile(path.join(process.cwd(), PUBLIC_PATH, '/dist/index.html'))
	})

	const PORT = production() ? 80 : DEV_PORT
	
	protocol.createServer(config, app).listen(PORT, () =>
	{
		console.log(`Listening on port ${PORT}`)
		console.log(`Running at ${__dirname}`)
	})
}
main()