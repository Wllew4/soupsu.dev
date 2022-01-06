<template>
	<div @click="openLink(link)" class="outer clickable">
		<p class="project_name">{{title}}</p>
		<p class="project_desc">
			{{desc}}
		</p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

	export default defineComponent({
		props: {
			title: String,
			desc: String,
			link: String
		},
		data()
		{
			return {
				title: this.title,
				desc: this.desc,
				link: this.link
			}
		},
		methods: {
			openLink(link: string)
			{
				window.open(link)
			}
		}
	})
</script>

<style lang="scss">
	.outer
	{
		width: 17.25rem;
		max-width: 100%;
		flex-grow: 2;
		flex-shrink: 1;
		min-height: 9.5rem;
		background-color: rgba(0, 0, 0, 0.55);
		border-radius: 30px;
		padding: 1rem;
		transition-duration: 0.25s;

		&:hover
		{
			background-color: rgba(0, 0, 0, 0.25);
		}
	}

	.project_name
	{
		font-family: 'Noto Sans JP';
		color: white;
		font-size: 2rem;
		margin: 0;
		text-align: center;
	}

	.project_desc
	{
		font-family: 'Noto Sans JP';
		color: white;
		font-size: 1rem;
		margin: 0.5rem 0 0.5rem 0;
	}
</style>