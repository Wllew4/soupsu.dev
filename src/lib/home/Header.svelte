<script lang="ts">
	import Button from "./Button.svelte";

	export let navbar: INav[]
</script>

<main>
	<div id="header">
		<div>
			<p id="title">Soupsu</p>
			<div id="navbar">
				{#each navbar as tab}
					<Button title={tab.title} url={tab.url}/>
				{/each}
			</div>
		</div>
		<!-- <div id="icon-block">
			<img id="icon" src="/img/icons/felix{selection + 1}.webp" alt="My fursona, Felix"/>
			<p id="artist-credit">🎨 by <a href="{credits[selection].url}" target="_blank">{credits[selection].name}</a></p>
		</div> -->
	</div>
</main>

