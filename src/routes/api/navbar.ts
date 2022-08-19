
/** @type { import('@sveltejs/kit').RequestHandler } */
export async function get() {
	return {
		body: [
			{
				"title": "Home",
				"url": "/"
			},
			{
				"title": "Projects",
				"url": "/projects"
			}
		]
	}
}