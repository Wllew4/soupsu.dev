<script lang="ts">
	export let project: IProject;
</script>

<main>
	<a href="https://github.com/Wllew4/obs-autoupload" target="_blank">
		<div id="box">
			<p>{ project.title }</p>
			<p>{ project.description }</p>
		</div>
	</a>
</main>

<style lang="scss">
	#box {
		background-color: rgba(15, 14, 32, 0.4);
		padding: 1rem;
		border-radius: 15px;

		&:hover {
			background-color: rgba(15, 14, 32, 0.8);
		}
		transition-duration: 0.2s;
	}

	a {
		text-decoration: none;
	}
</style>
