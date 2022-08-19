
const data = [
	{
		"img": "img/socials/twitter.svg",
		"url": "https://twitter.com/soupsu_",
		"alt": "Twitter link"
	},
	{
		"img": "img/socials/twitch.svg",
		"url": "https://twitch.tv/soupsu",
		"alt": "Twitch link"
	},
	{
		"img": "img/socials/youtube.svg",
		"url": "https://youtube.com/soupsu",
		"alt": "YouTube link"
	},
	{
		"img": "img/socials/github.svg",
		"url": "https://github.com/wllew4",
		"alt": "GitHub link"
	},
	{
		"img": "img/socials/discord.svg",
		"url": "https://discord.gg/BaJ4r9e",
		"alt": "Discord link"
	}
]

export function GET() {
	return new Response(JSON.stringify(data))
}
