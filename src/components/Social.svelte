<script lang="ts">
	export let social: ISocial;
</script>

<a href={social.url} target=blank>
	<img src={social.img} alt={social.alt} class="social-link">
</a>

<style lang="scss">
	.social-link
	{
		border: 1px solid white;
		border-radius: 50%;
		width: 2.5rem;
	}
</style>