<template>
<div id="projects">
	<Project v-for="i in projects" :key="i[0]"
		:title="i.title"
		:desc="i.desc"
		:link="i.link"/>
</div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Project from "./Project.vue";

import projects from '../data/projects.json'

export default defineComponent({
	data()
	{
		return {
			projects
		}
	},
	components: {
		Project
	}
})
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