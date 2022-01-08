<template>
	<div id="icon-info">
		<Icon/>
		<Info/>
	</div>
	<SocialLinks/>
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

	#icon-info
	{
		@extend %center-children;
		flex-wrap: wrap;
	}
</style>