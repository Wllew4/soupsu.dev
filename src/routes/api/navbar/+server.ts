import type { RequestHandler } from "@sveltejs/kit"

const data = [
	{
		"title": "Home",
		"url": "/"
	},
	{
		"title": "Projects",
		"url": "/projects"
	}
]

export const GET: RequestHandler = async () => {
	return new Response(JSON.stringify(data))
}
