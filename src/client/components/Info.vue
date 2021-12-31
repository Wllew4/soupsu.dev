<template>
	<span class="title">Soupsu</span><br>
	<span class="small">aka</span><br>
	<span class="text">Will, Felix, Janelle<br>
	{{ age }}
	<img alt="Bisexual pride flag" draggable="false" class="inlineimg" src="biflag.webp" width="128px" height="128px">
	he/him<br>
	Computer Science Major<br>
	Boston, MA<br></span>
</template>

<script lang="ts">
	import { defineComponent } from '@vue/runtime-core'
	
	const birthday: Date = new Date('02/03/2003')
	require('../img/home/biflag.webp')

	export default defineComponent({
		data()
		{
			return {
				age: new Date().getFullYear() - birthday.getFullYear()
			}
		}
	})
</script>