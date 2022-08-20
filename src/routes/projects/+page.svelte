<script lang="ts">
	import Project from '$lib/home/Project.svelte'

	export let data: ProjectData;
</script>

<main>
	<div id="projects">
		{#each data.projects as project}
			<Project project={project}/>
		{/each}
	</div>
</main>

<style lang="scss">
	#projects {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
</style>
