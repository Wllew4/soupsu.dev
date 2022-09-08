<script lang="ts">
	export let title: string
	export let url: string
</script>

<a href={url} draggable="false">
	{title}
</a>

<style lang="scss">
	a {
		@extend %link-box;
		border-width: 1px;
		border-style: solid;

		width: 10rem;
		padding-bottom: 4px;
		font-size: 2rem;
		text-decoration: none;
		@include mobile {
			font-size: 2rem;
			width: 8rem;
		}
	}
</style>
