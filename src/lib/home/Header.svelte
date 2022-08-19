<script lang="ts">
	import NavButton from "./NavButton.svelte";

	export let data: HomeData
</script>

<main>
	<div id="header">
		<div>
			<p id="name">Soupsu</p>
			<p id="artist-credit">🎨 by <a href="{ data.profile.artist_url }" target="_blank">{ data.profile.artist_name }</a></p>
		</div>
		<img id="icon" src={ data.profile.img } alt="My fursona, Felix"/>
	</div>
	<div id="tabs">
		{#each data.navbar as tab}
			<NavButton title={tab.title} url={tab.url}/>
		{/each}
	</div>
</main>

<style lang="scss">

	main {
		text-align: center;
	}

	%flex-section {
		display: flex;
		align-items: center;
		margin-bottom: 1rem;
	}

	#header {
		@extend %flex-section;
		justify-content: center;
	}

	#header #name {
		margin-right: 2rem;
		font-size: 5rem;
	}

	#header #artist-credit {
		font-size: 1.2rem;
		height: 0;
	}

	#header #icon {
		max-width: 15vw;
		border-radius: 50%;
	}

	#tabs
	{
		@extend %flex-section;
		justify-content: space-evenly;
		gap: 20px;
	}
</style>
