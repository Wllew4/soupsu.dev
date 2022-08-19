import type { Load } from "@sveltejs/kit"

export const load: Load = async (e) => {

	const navbar: INav[] = await (await e.fetch('/api/navbar')).json()
	const socials: ISocial[] = await (await e.fetch('/api/socials')).json()

	return {
		navbar,
		socials
	}
}
