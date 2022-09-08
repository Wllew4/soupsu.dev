import type { Load } from '@sveltejs/kit'

export const load: Load = async (e) => {
	const navbar: INav[] = await (await e.fetch('/api/navbar')).json()
	const socials: ISocial[] = await (await e.fetch('/api/socials')).json()
	const profile: IProfile[] = await (await e.fetch('/api/profile')).json()

	const pathname = e.url.pathname

	return {
		navbar,
		socials,
		profile,
		pathname,
	}
}
