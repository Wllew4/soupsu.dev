<template>
	<div id="container" class="center-children">
		<div id="main-block">
			<div id="icon-info" class="center-children">
				<div id="icon">
					<Icon/>
				</div>
				<div id="home-info">
					<Info/>
				</div>
			</div>
			<SocialLinks/>
		</div>
	</div>
</template>

<script lang="ts">
	import Icon from './Icon.vue'
	import Info from './Info.vue'
	import SocialLinks from './SocialLinks.vue'

	export default {
		components: {
			Icon,
			Info,
			SocialLinks
		}
	}
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
		max-width: 100%;
		padding: 3%;
		border-radius: 30px;
		background-color: rgba(36, 0, 51, 0.8);
	}

	#icon-info
	{
		flex-wrap: wrap;
	}

	#pfp
	{
		height: 15rem;
		width: 15rem;
		border-radius: 50%;
	}

	#home-info
	{
		width: 30rem;
		min-width: 20rem;
		margin-top: -0.6rem;
		flex: 1 0;
		color: white;
		text-align: center;
		font-family: 'Noto Sans JP';
	}

	#socials
	{
		justify-content: space-evenly;
		flex-basis: 100%;
		padding-top: 4%;
		flex-wrap: nowrap;
	}

	.social-link
	{
		border: 1px solid white;
		border-radius: 50%;
	}

	.social
	{
		display: block;
		height: 6rem;
		width: 6rem;
	}
</style>