<template>
	<img width="500px" height="500px" v-bind:src="icon" id="pfp" draggable="false" alt="profile picture">
	<p id="credit" class="small">Art by <a class="clickable" v-bind:href="credit_url" target="_blank" rel="norefferer">{{ credit_name }}</a></p>
</template>

<script lang="ts">
	import { defineComponent } from '@vue/runtime-core'

	type Art =
	{
		path: string;
		artist_name: string;
		artist_url: string;
	}

	const images: Art[] =
	[
		{
			path: 'felix1.webp',
			artist_name: 'Creamy Roux',
			artist_url: 'https://twitter.com/creamy_roux'
		},
		{
			path: 'felix2.webp',
			artist_name: 'SkullMutt',
			artist_url: 'https://twitter.com/skullmutt'
		},
		{
			path: 'felix3.webp',
			artist_name: 'SkullMutt',
			artist_url: 'https://twitter.com/skullmutt'
		},
		{
			path: 'felix4.webp',
			artist_name: 'Agus',
			artist_url: 'https://twitter.com/RainTheSpotty'
		},
		{
			path: 'felix5.webp',
			artist_name: 'Fleur',
			artist_url: 'https://twitter.com/Fleurfurr'
		}
	]

	for(let i = 1; i < 6; i++)
	{
		require('../img/home/icons/felix' + i + '.webp');
	}

	const icon: Art = images[Math.floor(Math.random() * 5)]

	export default defineComponent({
		data()
		{
			return {
				icon: icon.path,
				credit_name: icon.artist_name,
				credit_url: icon.artist_url
			}
		}
	})
</script>

<style lang="scss">
	#credit, #credit *
	{
		text-align: center;
		color: white;
		font-family: 'Noto Sans JP';
		margin: 0;
	}
</style>