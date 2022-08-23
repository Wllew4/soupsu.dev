import type { RequestHandler } from '@sveltejs/kit'
import { VITE_GH_TOKEN } from '$env/static/private'

const data: string[] = [
	'Wllew4/obs-autoupload',
	'Wllew4/node-ttv',
	'Wllew4/bofa_scraper',
]

async function fetchProject(path: string): Promise<IProject> {
	const response = await fetch(`https://api.github.com/repos/${path}`, {
		headers: {
			Authorization: `token ${VITE_GH_TOKEN}`,
		},
	})
	const repo_data = await response.json()

	const out: IProject = {
		title: repo_data['name'],
		description: repo_data['description'],
		url: `https://github.com/${path}`,
	}

	return out
}

export const GET: RequestHandler = async () => {
	let out: IProject[] = []
	for (let i = 0; i < data.length; i++) out.push(await fetchProject(data[i]))
	return new Response(JSON.stringify(out))
}
