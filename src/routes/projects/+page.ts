import type { Load } from '@sveltejs/kit'

export const load: Load = async (e) => {
	const response = await e.fetch('/api/projects')
	const projects: IProject[] = await response.json()

	return {
		projects,
	}
}
