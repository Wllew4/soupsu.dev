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
	<nav id="block">
		<div id="nav">
			{#each navbar as tab}
			<Button title={tab.title} url={tab.url}/>
			{/each}
		</div>
		<div id="nav">
			{#each socials as social}
			<Social social={social}/>
			{/each}
		</div>
		<hr color=white class="break">
		<slot></slot>
	</nav>
</main>

<style lang="scss">
	main
	{
		// layout
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;

		// background
		background-image: url('/img/background.jpg');
		background-size: cover;
		background-position: center;
	}

	#block
	{
		width: 60%;
		max-width: 50rem;
		height: 25rem;
		padding: 2rem;
		border-radius: 25px;
		background-color: rgba($color: #0f0e20, $alpha: 0.7);
		
		color: white;
		font-size: 50px;
		text-align: center;
	}

	.break
	{
		margin: 0;
	}

	#nav
	{
		display: flex;
		justify-items: center;
		justify-content: space-evenly;
		flex-wrap: wrap;
		margin-bottom: 1rem;
	}
</style>