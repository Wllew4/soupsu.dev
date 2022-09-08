<script lang="ts">
	export let url: string
	export let target: string = '_blank'
</script>

<a href={url} {target}>
	<slot />
</a>

<style lang="scss">
	a {
		&:hover {
			filter: brightness(75%);
		}
		transition-duration: 0.2s;
		text-decoration: none;
	}
</style>
