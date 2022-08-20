<script lang="ts">
	import '$lib/styles/main.scss'
	import { page } from '$app/stores'
</script>

<main>
	<a href="https://twitter.com/SammyTheTanuki" target="_blank">🎨 by SammyTheTanuki</a>
	<img src="/img/wtf.PNG" alt="Felix is mad and confused because of this error" draggable="false"/>
	<p id="err">
		Error {$page.status}
		<br>
		{$page.error.message}
	</p>
</main>

<style lang="scss">
	main {
		background-color: black;
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	a {
		font-size: 1rem;
	}

	img {
		width: 15rem;
	}

	#err {
		width: 100vw;
		font-size: 2.4rem;
		text-align: center;
		word-wrap: break-word;
	}
</style>
