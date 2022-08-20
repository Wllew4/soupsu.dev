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
		background-color: $box-color;
		padding: 1rem;
		border-radius: 15px;

		&:hover {
			background-color: $box-color;
		}
		transition-duration: 0.2s;
	}

	#title {
		text-decoration: underline;
	}
</style>
