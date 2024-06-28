<script>
	import '../styles/tailwind.css';
	import Fluid from '$lib/components/Fluid.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Toggle from '$lib/components/Toggle.svelte';
	import Gradient from '$lib/components/Gradient.svelte';
</script>

<div class="layout sm:py-15 flex min-h-[100svh] flex-col justify-center py-[5vh]">
	<!-- <div class="container relative self-stretch">
		<Toggle />
	</div> -->
	<slot />
	<!-- <div class="container relative self-stretch">
		<Footer />
	</div> -->
	<Gradient />
	<Fluid />
</div>
<div class="fixed top-0 -z-20 h-screen w-screen bg-tblack" />
