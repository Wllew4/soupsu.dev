<template>
<div id="socials">
	<div class="social-link" v-for="link in list" :key="link.url">
		<a v-bind:href="link.url" target="_blank" rel="noreferrer">
			<img v-bind:alt="link.alt" class="social" v-bind:src="'/static/img/socials/' + link.img" width="96" height="96" draggable="false"></a>
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

export default defineComponent({
	data()
	{
		let list: Social[] = []
		return {
			list
		}
	},
	async created()
	{
		const socials_json = await (await fetch('/static/data/socials.json')).json()
		for(let i = 0; i < socials_json.length; i++)
		{
			this.list[i] = new Social(socials_json[i].url, socials_json[i].img)
		}
	}
})
</script>

<style lang="scss">
@use '../scss/util';

#socials
{
	@extend %center-children;
	justify-content: space-evenly;
	flex-basis: 100%;
	padding-top: 1rem;
	flex-wrap: nowrap;
	max-height: 6rem;
	width: 100%;
}

.social-link
{
	border: 1px solid white;
	border-radius: 50%;
	max-height: 6rem;
	width: 6rem;
	max-width: 100/6%;
}

.social
{
	@extend %fadeOnHover;
	display: block;
	height: 100%;
	width: 100%;
}
</style>