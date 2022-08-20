import type { RequestHandler } from "@sveltejs/kit"

const data: IProject[] = [
	{
		"title": "obs-autoupload",
		"description": "Automatically upload your VODs to YouTube when your stream ends."
	},
	{
		"title": "node-ttv",
		"description": "A Node.js wrapper for Twitch.tv's Helix API."
	},
	{
		"title": "bofa_scraper",
		"description": "Simple Python web-scraper to get personal transaction data from BofA account."
	},
]

export const GET: RequestHandler = async () => {
	return new Response(JSON.stringify(data))
}
