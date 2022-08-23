<script lang="ts">
	import LinkFadeHover from '$lib/components/LinkFadeHover.svelte'
	import '$lib/styles/main.scss'
	import { page } from '$app/stores'
</script>

<svelte:head>
	<title>{ $page.status }: OOPSIE WOOPSIE!! Uwu We make a fucky wucky!! A wittle fucko boingo! The code monkeys at our headquarters are working VEWY HAWD to fix this!</title>
</svelte:head>

<LinkFadeHover url="/" target="_self">🠔 Return Home</LinkFadeHover>
<div>
	<img src="/img/wtf.PNG" alt="Felix is mad and confused because of this error" draggable="false"/>
	<LinkFadeHover url="https://twitter.com/SammyTheTanuki">🎨 by SammyTheTanuki</LinkFadeHover>
</div>
<p id="err">
	Error {$page.status}
	<br>
	{$page.error.message}
</p>

<style lang="scss">
	:global(body) {
		@extend %flex-centered;
		background-color: black;
		gap: 1.2rem;
	}

	div {
		@extend %flex-centered;
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
