
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

export function GET() {
	return new Response(JSON.stringify(data))
}
