<template>
	<div id="error">
		<p id="error-code">{{ error_code }} Error</p>
		<p id="error-msg">{{ error_msg }}</p>
	</div>
	<div id="right">
		<img id="dansen" src="dansa.GIF">
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue"

	require('../img/dansa.GIF')

	export default defineComponent({
		props: {
			code: Number,
			message: String
		},
		data()
		{
			return {
				error_code: this.code,
				error_msg: this.message
			}
		}
	})
</script>

<style lang="scss">
	@use '../scss/util';
	@use '../scss/text';
	@use '../scss/mobile';
	@use '../scss/spacebg';

	#error
	{
		position: absolute;
		height: 100%;
		width: 60%;
		float: left;

		color: white;
		font-family: 'Noto Sans JP';
		text-align: center;
		-webkit-text-stroke: 1px;
		-webkit-text-stroke-color: black;

		z-index: 1;

		*
		{
			margin-top: 0;
			margin-bottom: 0;
		}

		#error-code
		{
			text-shadow: 4px 4px 5px #000000;
			font-size: 10vh;
		}
		
		#error-msg
		{
			text-shadow: 2px 2px 5px #000000;
			font-size: 4vh;
			background-color: #00000060;
			border-radius: 30px;
			margin-left: 1vw;
			word-wrap: break-word;
		}
	}

	#right
	{
		display: flex;
		position: relative;
		height: 100%;
		width: 60%;
		float: right;
	}

	#dansen
	{
		position: absolute;
		max-height: 100vh;
		max-width: 60vw;
		bottom: 0;
		right: 0;

		z-index: 0;
	}
</style>