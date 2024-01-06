import type { RequestHandler } from '@sveltejs/kit'

const data = [
	{
		img: 'img/socials/twitter.svg',
		url: 'https://twitter.com/xravedogx',
		alt: 'Twitter link',
	},
	{
		img: 'img/socials/twitch.svg',
		url: 'https://twitch.tv/xravedogx',
		alt: 'Twitch link',
	},
	{
		img: 'img/socials/youtube.svg',
		url: 'https://youtube.com/@xravedogx',
		alt: 'YouTube link',
	},
	{
		img: 'img/socials/github.svg',
		url: 'https://github.com/wllew4',
		alt: 'GitHub link',
	},
	{
		img: 'img/socials/discord.svg',
		url: 'https://discord.gg/BaJ4r9e',
		alt: 'Discord link',
	},
]

export const GET: RequestHandler = async () => {
	return new Response(JSON.stringify(data))
}
