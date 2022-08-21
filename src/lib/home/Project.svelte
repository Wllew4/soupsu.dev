<script lang="ts">
	export let project: IProject;
</script>

<main>
	<a href={ project.url } target="_blank">
		<div id="box">
			<p id="title">{ project.title }</p>
			<p>{ project.description }</p>
		</div>
	</a>
</main>

<style lang="scss">

	$bg: rgba($color: $bg-base, $alpha: 0.3);

	// match project's width to Header width
	main {
		display: flex;
	}
	main a {
		flex-grow: 1;
		width: 0;
		// style
		text-decoration: none;
	}

	// styling
	#box {
		@extend %link-box;
		background-color: $bg;
		padding: 1rem;
	}

	#title {
		text-decoration: underline;
	}
</style>
