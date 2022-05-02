<script lang="ts">
import Button from "$components/Button.svelte";
import Social from "$components/Social.svelte";
import _navbar from "$json/navbar.json"
import _socials from "$json/socials.json"

let navbar: INav[]		= _navbar as INav[];
let socials: ISocial[]	= _socials as ISocial[];

</script>

<svelte:head>
	<title>Soupsuwu</title>
</svelte:head>

<main>
	<nav id="main-block">
		<div id="navbar">
			{#each navbar as tab}
				<Button title={tab.title} url={tab.url}/>
			{/each}
		</div>
		<div class="socials-section">
			{#each socials as social}
				<Social social={social}/>
			{/each}
		</div>
		<hr>
		<slot></slot>
	</nav>
</main>

<style lang="scss">
	$background-image: '/img/background.jpg';

	$box-width: 60%;
	$box-max-width: 50rem;
	$box-height: 25rem;
	$box-radius: 25px;
	$box-color: rgba($color: #0f0e20, $alpha: 0.7);

	$socials-max-width: 22rem;


	main
	{
		// layout
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;

		// background image
		background-image: url($background-image);
		background-size: cover;
		background-position: center;
	}

	#main-block
	{
		// layout
		padding: 2rem;
		width: $box-width;
		max-width: $box-max-width;
		height: $box-height;

		// style
		border-radius: $box-radius;
		background-color: $box-color;
		
		// inner text
		color: white;
		font-size: 50px;
		text-align: center;
	}

	%flex-center-wrap-container
	{
		display: flex;
		justify-items: center;
		justify-content: space-evenly;
		flex-wrap: wrap;
		margin-bottom: 1rem;
	}

	%no-margin
	{
		margin: 0;
	}

	#navbar
	{
		@extend %flex-center-wrap-container;
	}

	.socials-section 
	{
		@extend %flex-center-wrap-container;
		max-width: $socials-max-width;
		margin: auto;
	}

	hr
	{
		@extend %no-margin;
		color: white;
	}
</style>