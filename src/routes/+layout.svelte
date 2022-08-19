<script lang="ts">
	import Header from '$lib/home/Header.svelte';
	import '$lib/styles/main.scss';
	import { fly, slide } from 'svelte/transition';
	import { onMount } from 'svelte';
    import { navigating } from "$app/stores";

	export let data: HomeData

	let visible = false;
	onMount(() => { visible = true; })

	$: changed = $navigating?.from !== $navigating?.to;
</script>

<svelte:head>
	<title>Soupsu</title>
</svelte:head>

<main>
	{#if visible}
	<div id="main-block" in:fly="{{ y: 100, duration: 800 }}">
		<Header data={ data }/>
		<hr>
		{#key changed}
			<div in:slide={{ duration: 500 }} out:slide={{ duration: 500 }}>
				<slot />
			</div>
		{/key}
	</div>
	{/if}
</main>

<style lang="scss">

	$box-radius: 25px;
	$box-color: rgba($color: #0f0e20, $alpha: 0.7);

	main
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
		// style
		padding: 2rem;
		border-radius: $box-radius;
		background-color: $box-color;
		backdrop-filter: blur(5px);
	}

	hr {
		color: white;
		margin-bottom: 1rem;
	}
</style>
