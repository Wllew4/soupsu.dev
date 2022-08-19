<script context="module" lang="ts">
	/** @type {import('./$types').PageLoad} */
	export async function load() {
		return {
			navbar:
			[
				{
					"title": "Home",
					"url": "/"
				},
				{
					"title": "Projects",
					"url": "/projects"
				}
			]
		}
	}
</script>

<script lang="ts">
	
	import Button from "$components/Button.svelte";
	// import _navbar from "$json/navbar.json"

	/** @type {import('./$types').PageData} */
	export let navbar: INav[] = [
				{
					"title": "Home",
					"url": "/"
				},
				{
					"title": "Projects",
					"url": "/projects"
				}
			]

	// const navbar = data.navbar

	console.log(navbar)

	interface Credit {
		name: string
		url: string
	}

	let selection = Math.floor(Math.random() * 5)

	let credits: Credit[] = [
		{
			name: 'Roux',
			url: 'https://twitter.com/creamy_roux',
		},
		{
			name: 'SkullMutt',
			url: 'https://twitter.com/skullmutt',
		},
		{
			name: 'SkullMutt',
			url: 'https://twitter.com/skullmutt',
		},
		{
			name: 'Agus',
			url: 'https://twitter.com/RainTheSpotty',
		},
		{
			name: 'Fleurfurr',
			url: 'https://twitter.com/Fleurfurr',
		},
	]
</script>


<div id="header">
	<div>
		<p id="title">Soupsu</p>
		<div id="navbar">
			{#each navbar as tab}
				<Button title={tab.title} url={tab.url}/>
			{/each}
		</div>
	</div>
	<div id="icon-block">
		<img id="icon" src="/img/icons/felix{selection + 1}.webp" alt="My fursona, Felix"/>
		<p id="artist-credit">🎨 by <a href="{credits[selection].url}" target="_blank">{credits[selection].name}</a></p>
	</div>
</div>

<style lang="scss">

	$icon-size: 250px;


	#header {
		font-family: 'Noto Sans';
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
