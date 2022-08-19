<script lang="ts">
	export let title: string;
	export let url: string;
</script>

<a href={url} draggable="false">
	{title}
</a>

<style lang="scss">
	@import 'https://fonts.googleapis.com/css?family=Noto+Sans';

	a {
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
		font-size: 2rem;

		&:hover {
			background-color: rgba(15, 14, 32, 0.4);
		}

		transition-duration: 0.2s;
	}
</style>