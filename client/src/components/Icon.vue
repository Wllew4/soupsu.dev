<template>
<div id="icon">
	<img id="pfp" alt="profile picture" v-bind:src="'/static/img/icons/'+icon" width="500" height="500" draggable="false">
	<p id="credit">Art by <a v-bind:href="credit_url" target="_blank" rel="noreferrer">{{ credit_name }}</a></p>
</div>
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
		artist_name: 'Roux',
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

// for(let i = 1; i < 6; i++)
// {
// 	require('../assets/img/icons/felix' + i + '.webp');
// }

const art: Art = images[Math.floor(Math.random() * 5)]

export default defineComponent({
	data()
	{
		return {
			icon: art.path,
			credit_name: art.artist_name,
			credit_url: art.artist_url
		}
	}
})
</script>

<style lang="scss">
@use '../scss/text';
@import '../scss/mobile';

#credit, #credit *
{
	@extend .small;
	color: white;
	font-family: 'Noto Sans JP';
	margin: 0;
}

#pfp
{
	height: 15rem;
	width: 15rem;
	border-radius: 50%;
	margin-left: auto;
	margin-right: auto;
	display: inline-block;
}

#icon
{
	width: auto;
	text-align: center;
	@include mobile
	{
		width: 100% !important;
	}
}
</style>