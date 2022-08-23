<script lang="ts">
	import LinkFadeHover from '$lib/components/LinkFadeHover.svelte'

	const birthday = new Date('02/03/2003')
	const diff = new Date(Date.now() - birthday.getTime())
	const age = diff.getUTCFullYear() - 1970
</script>

<div id="description">
	{age}
	<img
		id="bi-pride"
		src="/img/bi-pride.png"
		alt="bisexual pride heart"
		draggable="false"
	/>
	he/him
	<br />
	Streamer & Programmer
	<br />
	<LinkFadeHover url="https://www.google.com/maps/place/Boston,+MA/">
		📍Boston, MA
	</LinkFadeHover>
</div>

<style lang="scss">
	#description {
		font-size: 2rem;
		text-align: center;
	}

	#bi-pride {
		height: 2rem;
		vertical-align: middle;
		position: relative;
		top: -3px;
	}
</style>
