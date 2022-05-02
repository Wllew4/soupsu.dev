<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export function load({ error, status })
	{
		return {
			props: {
				title: `Uh oh! Error ${status}: ${error?.message}`
			}
		};
	}
</script>

<script>
	/** @type {string} */
	export let title;
</script>

<main>
	<h1>{title}</h1>
	<a href="https://twitter.com/SammyTheTanuki" target=blank>🎨 SammyTheTanuki</a>
	<img src="img/wtf.PNG" alt="Felix looking confused" draggable=false>
</main>

<style lang="scss">
	@import 'https://fonts.googleapis.com/css?family=Noto+Sans';

	main
	{
		background-color: #0f0e20;
		height: 100vh;
		margin: 0;
		color: white;
		font-family: 'Noto Sans';
	}

	h1
	{
		font-size: 3rem;
		margin: 0;
		padding-left: min(5vw, 5vh);
		padding-top: min(5vw, 5vh);
	}

	a
	{
		color: white;
		position: absolute;
		bottom: 0;
		right: 60vh;
		z-index: 99;
	}

	img
	{
		position: absolute;
		right: 0;
		bottom: 0;
		height: 80%;
	}
</style>