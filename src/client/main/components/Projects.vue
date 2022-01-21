<template>
<div id="projects">
	<Project
		title="soupsu.dev"
		desc="This website!
		A personal hub for social media links,
		personal projects, etc."
		link="https://github.com/Wllew4/soupsu.dev"/>
	<Project
		title="node-ttv"
		desc="A Node.js wrapper for
		Twitch.tv's Helix API."
		link="https://github.com/Wllew4/node-ttv"/>
	<Project
		title="bofa_scraper"
		desc="Simple Python web-scraper
		to get personal transaction
		data from Bank of America account."
		link="https://github.com/Wllew4/bofa_scraper"/>
</div>
</template>

<script lang="ts">
import Project from "./Project.vue";

export default {
components: {
	Project
}
}
</script>

<style lang="scss">
#projects
{
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 2rem;
}
</style>