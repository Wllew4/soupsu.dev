<script lang="ts">
	import { defineComponent } from "@vue/runtime-core"

	type Social =
	{
		url: string;
		img: string;
	}

	const l: Social[] =
	[
		{
			url: 'https://twitch.tv/soupsu',
			img: 'twitch.svg'
		},
		{
			url: 'https://twitter.com/soupsu_',
			img: 'twitter.svg'
		},
		{
			url: 'https://youtube.com/soupsepicgames',
			img: 'youtube.svg'
		},
		{
			url: 'https://discord.gg/BaJ4r9e',
			img: 'discord.svg'
		},
		{
			url: 'https://github.com/Wllew4',
			img: 'github.svg'
		}
	]

	for (let i = 0; i < l.length; i++)
	{
		require('../img/home/socials/' + l[i].img)
	}

	export default defineComponent({
		data()
		{
			return {
				list: l
			}
		}
	})
</script>

<template>
	<div id="socials" class="center-children">
	<div v-for="link in list" :key="link.url" class="social-link">
		<a v-bind:href="link.url" target="_blank">
		<img v-bind:src="link.img" class="social fadeOnHover" draggable='false'></a>
	</div>
</div>
</template>