<template>
<div id="body">
	<div id="container">
		<div id="main-block">
			<div id="tabs">
				<div class="tab" v-bind:class="{ activeTab: activeTab==0 }" @click="selectTab('')">
					Home
				</div>
				<div class="tab" v-bind:class="{ activeTab: activeTab==1 }" @click="selectTab('projects')">
					Projects
				</div>
				<div class="tab" @click="openFile('public/resume.pdf')">
					Resume
				</div>
			</div>
			<div id="content">
				<Home 		v-if="activeTab == 0"/>
				<Projects 	v-if="activeTab == 1"/>
			</div>
		</div>
	</div>
</div>
</template>

<script lang="ts">
	import { defineComponent } from '@vue/runtime-core'
	import Home from './components/Home.vue'
	import Projects from './components/Projects.vue'

	require('./assets/resume.pdf')

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
			Projects
		}
	})
</script>

<style lang="scss">
	@use './scss/util';
	@use './scss/text';
	@use './scss/mobile';

	$pad: 2.25rem;

	#body
	{
		@extend %spacebg;
		height: 90vh;
		padding: 5vh;
		overflow-x: hidden;
	}

	#container
	{
		@extend %center-children;
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
		@extend .text;
		display: flex;
		flex-direction: row;
		height: $pad;
		max-width: 100%;
		// @include mobile
		// {
		// 	height: 5rem !important;
		// }
	}

	.tab
	{
		@extend %clickable;
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

	#content
	{
		min-height: 25rem;
		padding: $pad;
		background-color: rgba(36, 0, 51, 0.8);
		border-radius: 0 0 30px 30px;
	}
</style>