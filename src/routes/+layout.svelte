<script lang="ts">
	import Header from '$lib/home/Header.svelte';
	import '$lib/styles/main.scss';

	export let data: HomeData
</script>

<svelte:head>
	<title>Soupsu</title>
</svelte:head>

<main>
	<div id="main-block">
		<Header navbar={ data.navbar }/>
		<hr>
		<slot />
	</div>
</main>

<style lang="scss">

	$box-width: 80%;
	$box-height: 70%;
	$box-radius: 25px;
	$box-color: rgba($color: #0f0e20, $alpha: 0.7);

	main
	{
		// layout
		height: 100vh;
		width: 100vw;
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		// background
		background-color: aquamarine;
		background-size: cover;
		background-position: center;
	}

	#main-block
	{
		// layout
		padding: 2rem;
		// width: $box-width;
		// height: $box-height;
		width: 600px;

		// style
		border-radius: $box-radius;
		background-color: $box-color;
		backdrop-filter: blur(5px);
		
		// inner text
		color: white;
		font-size: 50px;
		text-align: center;

		transition: height 2s;
	}

	hr {
		color: white;
	}
</style>