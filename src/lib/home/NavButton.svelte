<script lang="ts">
	export let title: string;
	export let url: string;
</script>

<a href={url} draggable="false">
	{title}
</a>

<style lang="scss">

	a {
		// box
		width: 10rem;
		padding-bottom: 4px;

		// border
		border-width: 1px;
		border-style: solid;
		border-radius: 12px;

		// text
		font-size: 2rem;
		text-decoration: none;

		// hover animation
		&:hover {
			background-color: rgba(15, 14, 32, 0.4);
		}
		transition-duration: 0.2s;
	}
</style>
