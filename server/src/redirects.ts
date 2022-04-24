import { Express } from 'express'
import fs from 'fs'

/*	Redirect handling  */
interface IRedirect
{
	url: string,
	redirect: string
}

export default function createRedirects(app: Express, path: string)
{
	let redirects: IRedirect[] = JSON.parse(fs.readFileSync(path, 'utf8')) as IRedirect[]
	
	for(let redirect of redirects)
	{
		app.get('/' + redirect.url, (_, res) =>
		{
			res.redirect(302, redirect.redirect)
		})
	}
}