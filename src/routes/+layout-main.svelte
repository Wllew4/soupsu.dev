<script lang="ts">
	import Header from '$lib/home/Header.svelte'
	import MatchSiblingWidth from '$lib/components/MatchSiblingWidth.svelte'
	import '$lib/styles/main.scss'
	import { fly, slide } from 'svelte/transition'
	import { onMount } from 'svelte'

	export let data: HomeData

	let visible = false
	onMount(() => {
		visible = true
	})
</script>

<svelte:head>
	<title>Soupsu</title>
</svelte:head>

{#if visible}
	<div id="main-block" in:fly={{ y: 100, duration: 800 }}>
		<Header {data} />
		<hr />

		<MatchSiblingWidth>
			{#key data.pathname}
				<div in:slide={{ duration: 500 }} out:slide={{ duration: 500 }}>
					<slot />
				</div>
			{/key}
		</MatchSiblingWidth>
	</div>
{/if}

<style lang="scss">
	$bg: rgba(
		$color: $bg-base,
		$alpha: 0.65
	);
	$radius: 25px;

	:global(body) {
		@extend %flex-centered;

		background-color: aquamarine;
		background-size: cover;
		background-position: center;
	}

	#main-block {
		background-color: $bg;
		border-radius: $radius;
		backdrop-filter: blur(5px);
		padding: 2rem;
	}

	hr {
		color: white;
		margin-bottom: 1rem;
	}
</style>
