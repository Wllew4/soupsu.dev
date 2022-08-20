<script lang="ts">
	import Project from '$lib/home/Project.svelte'

	export let data: ProjectData;
</script>

<main>
	<!-- <div id="projects">
		{#each data.projects as project}
			<Project project={project}/>
		{/each}
	</div> -->
</main>

<style lang="scss">
	main {
		display: block;
		align-items: center;
	}

	#projects {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>