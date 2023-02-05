<script>
	import '../styles/tailwind.css';
	import Lines from '$lib/components/Lines.svelte';
	import Fluid from '$lib/components/Fluid.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Toggle from '$lib/components/Toggle.svelte';
	import Gradient from '$lib/components/Gradient.svelte';
</script>

<div class="layout flex min-h-screen flex-col justify-start py-[10vh]">
	<div class="container relative self-stretch">
		<Toggle />
	</div>
	<slot />
	<div class="container relative self-stretch">
		<Footer />
	</div>
	<Gradient />
	<Lines />
	<Fluid />
</div>
<div class="fixed top-0 -z-20 h-screen w-screen bg-tblack" />
