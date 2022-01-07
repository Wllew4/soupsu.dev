<template>
	<div id="home-info">
		<span class="title">Soupsu</span><br>
		<span class="small">aka</span><br>
		<span class="text">Will, Felix, Janelle<br>
		{{ age }}
		<img alt="Bisexual pride flag" draggable="false" class="inlineimg" src="public/biflag.webp" width="128px" height="128px">
		he/him<br>
		Computer Science Major<br>
		Boston, MA<br></span>
		<a href="https://ko-fi.com/soupsu" target="_blank" rel="noreferrer" alt="link to ko-fi profile">
			<img src="https://ko-fi.com/img/githubbutton_sm.svg" id="ko-fi" alt="link to ko-fi profile" class="clickable" width="223px" height="30px"/></a>
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
	#home-info
	{
		width: 30rem;
		min-width: 20rem;
		margin-top: -0.6rem;
		flex: 1 0;
		color: white;
		text-align: center;
		font-family: 'Noto Sans JP';
	}

	#ko-fi
	{
		margin-top: 0.4rem;
	}

	@media only screen and (max-width: 779px)
	{
		#ko-fi
		{
			width: 85% !important;
		}
	}
</style>