<script lang="ts">
	type Social =
	{
		url: string;
		img: string;
	}

	const l: Social[] =
	[
		{
			url: 'https://twitch.tv/soupsu',
			img: '../img/home/socials/twitch.svg'
		},
		{
			url: 'https://twitter.com/soupsu_',
			img: '../img/home/socials/twitter.svg'
		},
		{
			url: 'https://youtube.com/soupsepicgames',
			img: '../img/home/socials/youtube.svg'
		},
		{
			url: 'https://discord.gg/BaJ4r9e',
			img: '../img/home/socials/discord.svg'
		},
		{
			url: 'https://github.com/Wllew4',
			img: '../img/home/socials/github.svg'
		}
	]

	export default {
		data()
		{
			return {
				hello: 'hi',
				list: l
			}
		}
	}
</script>

<template>
<div id="socials" class="center-children">
	woooooooooo
	<div v-for="link in list" :key="link" class="social-link">
		<a v-bind:href="link.url" target="_blank">
			{{hello}}
		<img v-bind:src="link.img" class="social fadeOnHover" draggable='false'></a>
	</div>
</div>
</template>