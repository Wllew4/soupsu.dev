<template>
	<div id="container" class="center-children">
		<div id="main-block">
			<div id="tabs" class="text">
				<div @click="selectTab(0)" class="clickable tab">
					Home {{activeTab}}
				</div>
				<div @click="selectTab(1)" class="clickable tab">
					Projects
				</div>
			</div>
			<Home v-if="activeTab == 0"/>
			<Projects v-if="activeTab == 1"/>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from '@vue/runtime-core'
	import Home from './Home.vue'
	import Projects from './Projects.vue'

	export default defineComponent({
		data() {
			return {
				activeTab: 0
			}
		},
		methods: {
			selectTab(index: number): void
			{
				this.activeTab = index
			}
		},
		components: {
			Home,
			Projects
		}
	})
</script>

<style lang="scss">
	@use '../scss/util';
	@use '../scss/text';
	@use '../scss/mobile';
	@use '../scss/spacebg';

	body
	{
		padding: 5%;
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
		padding: 3%;
		padding-top: 0;
		border-radius: 30px;
		background-color: rgba(36, 0, 51, 0.8);
	}

	#tabs
	{
		display: flex;
		flex-direction: row;
		height: 3%;
	}

	.tab
	{
		flex-grow: 1;
		background-color: aquamarine;
	}
</style>