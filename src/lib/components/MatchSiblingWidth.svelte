<main>
	<div id="content">
		<slot/>
	</div>
</main>

<style lang="scss">
	main {
		display: flex;
	}
	
	#content {
		flex-grow: 1;
		width: 0;
	}
</style>