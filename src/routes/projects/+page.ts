import type { Load } from "@sveltejs/kit"

export const load: Load = async (e) => {

	const projects: IProject[] = await (await e.fetch('/api/projects')).json()

	return {
		projects
	}
}
