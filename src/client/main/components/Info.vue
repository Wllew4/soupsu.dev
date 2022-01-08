<template>
	<div id="home-info">
		<span class="title">Soupsu</span><br>
		<span class="small">aka</span><br>
		<span class="text">Will, Felix, Janelle<br>
		{{ age }}
		<img alt="Bisexual pride flag" class="inlineimg" src="public/img/biflag.webp" width="128" height="128" draggable="false">
		he/him<br>
		Computer Science Major<br>
		Boston, MA<br></span>
		<a alt="link to ko-fi profile" href="https://ko-fi.com/soupsu" target="_blank" rel="noreferrer">
			<img alt="link to ko-fi profile" id="ko-fi" src="https://ko-fi.com/img/githubbutton_sm.svg" width="223" height="30"/></a>
	</div>
</template>

<script lang="js">
	import { defineComponent } from '@vue/runtime-core'
	
	require('../assets/img/biflag.webp')
	
	const birthday = new Date('02/03/2003')

	export default defineComponent({
		data() {
			return {
				age: Math.floor((Date.now() - birthday.getTime()) / 31536000000)
			};
		}
	})
</script>

<style lang="scss">
	@use '../scss/util';
	@use '../scss/mobile';

	#home-info
	{
		width: 30rem;
		min-width: 20rem;
		margin-top: -0.6rem;
		flex: 1 0;
		color: white;
		text-align: center;
		font-family: 'Noto Sans JP';
		// @include mobile
		// {
		// 	min-width: 100% !important;
		// }
	}

	#ko-fi
	{
		@extend %clickable;
		margin-top: 0.4rem;
		height: auto;
		// @include mobile
		// {
		// 	width: 60% !important;
		// }
	}

	@media only screen and (max-width: 779px)
	{
		#ko-fi
		{
			width: 60% !important;
		}
	}
</style>