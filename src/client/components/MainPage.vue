<template>
	<div id="container" class="center-children">
		<div id="main-block">
			<div id="tabs" class="text">
				<div @click="selectTab('')" class="clickable tab" v-bind:class="{ activeTab: activeTab==0 }">
					Home
				</div>
				<div @click="selectTab('projects')" class="clickable tab" v-bind:class="{ activeTab: activeTab==1 }">
					Projects
				</div>
				<!-- <div @click="selectTab(2)" class="clickable tab" v-bind:class="{ activeTab: activeTab==2 }">
					Papers
				</div> -->
				<div @click="openFile('resume.pdf')" class="clickable tab">
					Resume
				</div>
			</div>
			<div id="content">
				<Home v-if="activeTab == 0"/>
				<Projects v-if="activeTab == 1"/>
				<!-- <Papers v-if="activeTab == 2"/> -->
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from '@vue/runtime-core'
	import Home from './Home.vue'
	import Projects from './Projects.vue'
	import Papers from './Papers.vue'

	interface IStringNumberDict
	{
		[index: string]: number;
	}

	const routes: IStringNumberDict = 
	{
		'': 0,
		'projects': 1
	}

	export default defineComponent({
		data() {
			return {
				activeTab: routes[window.location.pathname.substring(1)]
			}
		},
		methods: {
			selectTab(path: string): void
			{
				window.history.pushState(path, '', '/' + path)
				this.activeTab =  routes[path]
			},
			openFile(link: string)
			{
				window.open(link)
			}
		},
		components: {
			Home,
			Projects,
			Papers
		}
	})
</script>

<style lang="scss">
	@use '../scss/util';
	@use '../scss/text';
	@use '../scss/mobile';
	@use '../scss/spacebg';

	$pad: 2.25rem;

	body
	{
		padding: 5%;
		overflow-x: hidden;
	}

	#container
	{
		min-width: 20rem;
		min-height: 100%;
		flex-direction: column;
	}

	#main-block
	{
		max-width: 90%;
		width: 45rem;
	}

	#tabs
	{
		display: flex;
		flex-direction: row;
		height: $pad;
		max-width: 100%;
	}

	#content
	{
		min-height: 25rem;
		padding: $pad;
		background-color: rgba(36, 0, 51, 0.8);
		border-radius: 0 0 30px 30px;
	}

	.tab
	{
		flex-grow: 1;
		border-radius: 30px 30px 0 0;
		background-color: rgba(36, 0, 51, 0.4);
		text-align: center;
		color: white;
		font-family: 'Noto Sans JP';
	}

	.activeTab
	{
		background-color: rgba(36, 0, 51, 0.8);
	}
</style>