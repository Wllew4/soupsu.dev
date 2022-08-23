<script lang="ts">
	export let social: ISocial
</script>

<a href={social.url} target="blank">
	<img src={social.img} alt={social.alt} />
</a>

<style lang="scss">
	img {
		@extend %link-box;
		border: 1px solid white;
		border-radius: 50%;
		width: 4rem;
	}
</style>
