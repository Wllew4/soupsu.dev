<script lang="ts">
	import { page } from '$app/stores'
	import Header from '$components/Header.svelte';
	import _socials from "$json/socials.json"
	import { fly, scale, fade } from 'svelte/transition';
	import { onMount } from "svelte";
	import Transition from '$components/transition.svelte';

	let socials: ISocial[]	= _socials as ISocial[];

	let visible = false
	onMount(()=>{
		visible = true
	})

</script>

<svelte:head>
	<title>Soupsu</title>
	<link rel="icon" type="image/svg" href="favicon.ico" />
</svelte:head>
<!-- in:fly="{{ y: 100, duration: 800 }}" -->
<main>
	<!-- {#if visible} -->
	<nav id="main-block" in:fly="{{ y: 100, duration: 800 }}" >
		<Header/>
		<!-- <div class="socials-section">
			{#each socials as social}
				<Social social={social}/>
			{/each}
		</div> -->
		<hr>
		<Transition url={$page.url}>
			<slot/>
		</Transition>
	</nav>
	<!-- {/if} -->
</main>

<style lang="scss">
	@import 'https://fonts.googleapis.com/css?family=Noto+Sans';

	$background-image: '/img/background.jpg';

	$box-width: 80%;
	$box-height: 70%;
	$box-radius: 25px;
	$box-color: rgba($color: #0f0e20, $alpha: 0.7);

	$socials-max-width: 22rem;

	slot {
		width: fit-content;
	}

	main
	{
		// layout
		height: calc(100vh - 4rem);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 2rem;

		// background image
		// background-image: url($background-image);
		background-color: aquamarine;
		background-size: cover;
		background-position: center;
	}

	#main-block
	{
		// layout
		padding: 2rem;
		// width: $box-width;
		// height: $box-height;
		width: 600px;

		// style
		border-radius: $box-radius;
		background-color: $box-color;
		backdrop-filter: blur(5px);
		
		// inner text
		color: white;
		font-size: 50px;
		text-align: center;

		transition: height 2s;
	}

	%flex-center-wrap-container
	{
		display: flex;
		justify-items: left;
		// justify-content: space-evenly;
		flex-wrap: wrap;
		margin-bottom: 1rem;
	}

	%no-margin
	{
		margin: 0;
	}

	// .socials-section 
	// {
	// 	@extend %flex-center-wrap-container;
	// 	max-width: $socials-max-width;
	// 	margin: auto;
	// }

	hr
	{
		@extend %no-margin;
		color: white;
	}
</style>