<script>
	import '../styles/tailwind.css';
	import Fluid from '$lib/components/Fluid.svelte';
</script>

<div class="layout min-h-screen py-[10vh]">
	<div class="container h-full">
		<slot />
	</div>
	<Fluid />
</div>
<div class="bg-tblack fixed w-screen h-screen top-0 -z-20" />
