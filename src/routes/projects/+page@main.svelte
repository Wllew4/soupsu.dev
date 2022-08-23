<script lang="ts">
	import Project from '$lib/home/Project.svelte'

	export let data: ProjectData
</script>

<div id="projects">
	{#each data.projects as project}
		<Project {project} />
	{/each}
</div>

<style lang="scss">
	#projects {
		@extend %flex-column;
		gap: 0.5rem;
	}
</style>
