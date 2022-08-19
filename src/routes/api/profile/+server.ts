import type { RequestHandler } from "@sveltejs/kit"

const profiles: IProfile[] = [
	{
		img: '/img/profile/felix1.webp',
		artist_name: 'Roux',
		artist_url: 'https://twitter.com/creamy_roux',
	},
	{
		img: '/img/profile/felix2.webp',
		artist_name: 'SkullMutt',
		artist_url: 'https://twitter.com/skullmutt',
	},
	{
		img: '/img/profile/felix3.webp',
		artist_name: 'SkullMutt',
		artist_url: 'https://twitter.com/skullmutt',
	},
	{
		img: '/img/profile/felix4.webp',
		artist_name: 'Agus',
		artist_url: 'https://twitter.com/RainTheSpotty',
	},
	{
		img: '/img/profile/felix5.webp',
		artist_name: 'Fleurfurr',
		artist_url: 'https://twitter.com/Fleurfurr',
	},
]

export let GET: RequestHandler = () => {
	let profile = profiles[Math.floor(Math.random() * profiles.length)]
	return new Response(JSON.stringify(profile))
}
