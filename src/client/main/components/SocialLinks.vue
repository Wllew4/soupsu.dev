<template>
	<div id="socials" class="center-children">
		<div v-for="link in list" :key="link.url" class="social-link">
			<a v-bind:href="link.url" target="_blank" rel="noreferrer">
			<img v-bind:src="'public/img/socials/' + link.img" class="social fadeOnHover" draggable="false" v-bind:alt="link.alt" width="96px" height="96px"></a>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from '@vue/runtime-core'

	class Social
	{
		url: string;
		img: string;
		alt: string;

		constructor(url: string, img: string)
		{
			this.url = url;
			this.img = img;
			this.alt = 'link to ' + new URL(url).hostname + ' profile'
		}
	}

	const socials: Social[] =
	[
		new Social(
			'https://twitch.tv/soupsu',
			'twitch.svg'
		),
		new Social(
			'https://twitter.com/soupsu_',
			'twitter.svg'
		),
		new Social(
			'https://youtube.com/soupsu',
			'youtube.svg'
		),
		new Social(
			'https://discord.gg/BaJ4r9e',
			'discord.svg'
		),
		new Social(
			'https://github.com/Wllew4',
			'github.svg'
		)
	]

	for (let i = 0; i < socials.length; i++)
	{
		require('../assets/img/socials/' + socials[i].img)
	}

	export default defineComponent({
		data()
		{
			return {
				list: socials
			}
		}
	})
</script>

<style lang="scss">
	#socials
	{
		justify-content: space-evenly;
		flex-basis: 100%;
		padding-top: 1rem;
		flex-wrap: nowrap;
	}

	.social-link
	{
		border: 1px solid white;
		border-radius: 50%;
	}

	.social
	{
		display: block;
		height: auto;
		width: 6rem;
	}
</style>