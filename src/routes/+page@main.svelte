<script lang="ts">
	const birthday = new Date('02/03/2003');
	const diff = new Date(Date.now() - birthday.getTime())
	const age = diff.getUTCFullYear() - 1970;
</script>

<main>
	{ age } <img id="bi-pride" src="/img/bi-pride.png" alt="bisexual pride heart" draggable="false"/> he/him
	<br>
	Streamer & Programmer
	<br>
	📍<a href="https://www.google.com/maps/place/Boston,+MA/" target="_blank">Boston, MA</a>
</main>

<style lang="scss">
	main {
		font-size: 2rem;
		text-align: center;
	}

	#bi-pride {
		// inline image
		height: 2rem;
		vertical-align: middle;
		// adjust
		position: relative;
		top: -3px;
	}
</style>
