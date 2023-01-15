<script>
	import '../styles/tailwind.css';
	import Fluid from '$lib/components/Fluid.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Toggle from '$lib/components/Toggle.svelte';
</script>

<div class="layout min-h-screen py-[10vh] flex flex-col justify-center">
	<div class="container relative self-stretch">
		<Toggle />
		<slot />
		<Footer />
	</div>
	<Fluid />
</div>
<div class="bg-tblack fixed w-screen h-screen top-0 -z-20" />
