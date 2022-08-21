<script lang="ts">
	import Header from '$lib/home/Header.svelte';
	import '$lib/styles/main.scss';
	import { fly, slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	export let data: HomeData

	let visible = false;
	onMount(() => {
		visible = true;
	})
</script>

<svelte:head>
	<title>Soupsu</title>
</svelte:head>

{#if visible}
<div id="main-block" in:fly="{{ y: 100, duration: 800 }}">
	<Header data={ data }/>
	<hr>
	{#key data.pathname}
		<div in:slide={{ duration: 500 }} out:slide={{ duration: 500 }}>
			<slot/>
		</div>
	{/key}
</div>
{/if}

<style lang="scss">
	
	$bg: rgba($color: $bg-base, $alpha: 0.65);
	$radius: 25px;

	:global(body)
	{
		// layout
		height: 100vh;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;

		// background
		background-color: aquamarine;
		background-size: cover;
		background-position: center;
	}

	#main-block
	{
		display: inline-block;
		padding: 2rem;
		border-radius: $radius;
		background-color: $bg;
		backdrop-filter: blur(5px);
	}

	hr {
		color: white;
		margin-bottom: 1rem;
	}
</style>
