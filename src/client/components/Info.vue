<template>
	<div id="home-info">
		<span class="title">Soupsu</span><br>
		<span class="small">aka</span><br>
		<span class="text">Will, Felix, Janelle<br>
		{{ age }}
		<img alt="Bisexual pride flag" draggable="false" class="inlineimg" src="biflag.webp" width="128px" height="128px">
		he/him<br>
		Computer Science Major<br>
		Boston, MA<br></span>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from '@vue/runtime-core'
	
	require('../img/home/biflag.webp')
	
	const birthday: Date = new Date('02/03/2003')

	export default defineComponent({
		data()
		{
			return {
				age: Math.floor((Date.now() - birthday.getTime()) / 31536000000)
			}
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
</style>