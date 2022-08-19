<script lang="ts">
	import Button from "./Button.svelte";

	export let data: HomeData
</script>

<main>
	<div id="header">
		<div>
			<p id="title">Soupsu</p>
			<div id="navbar">
				{#each data.navbar as tab}
					<Button title={tab.title} url={tab.url}/>
				{/each}
			</div>
		</div>
		<div id="icon-block">
			<img id="icon" src={ data.profile.img } alt="My fursona, Felix"/>
			<p id="artist-credit">🎨 by <a href="{ data.profile.artist_url }" target="_blank">{ data.profile.artist_name }</a></p>
		</div>
	</div>
</main>

<style lang="scss">

	$icon-size: 250px;


	#header {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
	}

	#title {
		margin-right: 2rem;
		font-size: 80px;
	}

	#icon-block {
		max-width: $icon-size;
	}

	#artist-credit {
		font-size: 20px;
		margin: 0;
		a {
			color: white;
		}
	}

	#icon {
		max-height: 100%;
		max-width: 100%;
		border-radius: 50%;
	}

	%flex-center-wrap-container
	{
		display: flex;
		justify-items: left;
		// justify-content: space-evenly;
		flex-wrap: wrap;
		margin-bottom: 1rem;
	}

	#navbar
	{
		gap: 20px;
		@extend %flex-center-wrap-container;
	}
</style>