<script lang="ts">
	import Header from '$lib/home/Header.svelte'
	import Social from '$lib/home/Social.svelte'
	import MatchMaxSiblingWidth from '$lib/components/MatchMaxSiblingWidth.svelte'
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

<div id="outer-padding">
	<div id="inner-wrapper">
		{#if visible}
			<div id="main-block" in:fly={{ y: 100, duration: 800 }}>
				<Header {data} />

				<hr />

				<MatchMaxSiblingWidth>
					{#key data.pathname}
						<div
							in:slide={{ duration: 500 }}
							out:slide={{ duration: 500 }}
						>
							<slot />
						</div>
					{/key}
				</MatchMaxSiblingWidth>

				<hr />

				<div id="socials">
					{#each data.socials as social}
						<Social {social} />
					{/each}
				</div>
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	$bg: rgba(
		$color: $bg-base,
		$alpha: 0.65
	);
	$radius: 25px;

	:global(body) {
		background-image: linear-gradient(
				rgba(0, 0, 0, 0.2),
				rgba(0, 0, 0, 0.2)
			),
			url('/img/bg.png');
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
	}

	#outer-padding {
		padding: 5vh;
		height: 90vh;
		overflow-x: hidden; // no idea why this works???
	}

	#inner-wrapper {
		@extend %flex-centered;
		min-height: 100%;
	}

	#main-block {
		background-color: $bg;
		border-radius: $radius;
		backdrop-filter: blur(10px);
		padding: 2rem;
	}

	hr {
		color: white;
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	#socials {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
</style>
