<script lang="ts">
	import LinkFadeHover from '$lib/components/LinkFadeHover.svelte'
	import NavButton from './NavButton.svelte'

	export let data: HomeData
</script>

<main>
	<div id="header">
		<div id="left">
			<p id="name">Soupsu</p>
			<p id="artist-credit">
				<LinkFadeHover url={data.profile.artist_url}>
					🎨 by {data.profile.artist_name}
				</LinkFadeHover>
			</p>
		</div>
		<img
			id="icon"
			src={data.profile.img}
			alt="My fursona, Felix"
			draggable="false"
		/>
	</div>
	<div id="tabs">
		{#each data.navbar as tab}
			<NavButton title={tab.title} url={tab.url} />
		{/each}
	</div>
</main>

<style lang="scss">
	main {
		text-align: center;
	}

	%flex-section {
		@extend %flex-hcenter;
	}

	#header {
		@extend %flex-section;

		@include mobile {
			flex-direction: column;
		}

		justify-content: center;
		margin-bottom: 1rem;
	}

	#header #left {
		margin-right: 1rem;
		@include mobile {
			margin: 0;
		}
	}

	#header #name {
		font-size: 5rem;
		@include mobile {
			font-size: 4rem;
		}
	}

	#header #artist-credit {
		font-size: 1.2rem;
		margin-bottom: 0.5rem;
		height: 0;
		@include mobile {
			height: 100%;
		}
	}

	#header #icon {
		width: 12rem;
		border-radius: 50%;
		@include mobile {
			width: 8rem;
		}
	}

	#tabs {
		@extend %flex-section;
		justify-content: space-evenly;
		gap: 20px;
	}
</style>
