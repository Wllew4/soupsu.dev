<script lang="ts">
	export let title: string;
	export let url: string;
</script>

<a href={url}>
	{title}
</a>

<style lang="scss">
	@import 'https://fonts.googleapis.com/css?family=Noto+Sans';

	a
	{
		// box
		width: 10rem;
		padding-bottom: 4px;
		margin-bottom: 8px;
		color: white;
		text-decoration: none;

		// border
		border-color: white;
		border-width: 1px;
		border-style: solid;
		border-radius: 12px;

		// text
		font-family: 'Noto Sans';
		font-size: 1.5rem;
	}
</style>