<script lang="ts">
	
	import { fade, slide, crossfade } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing'

	export let url: URL

</script>

{#key url}
<div
	in:slide
	out:slide
>
	<slot/>
</div>
{/key}