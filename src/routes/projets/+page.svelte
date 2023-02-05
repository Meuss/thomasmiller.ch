<script>
	import Nav from '$lib/components/Nav.svelte';
	import Projects from '$lib/components/projets/Projects.svelte';
</script>

<svelte:head>
	<title>Projets - Thomas Miller</title>
</svelte:head>

<main class="relative flex flex-col items-start justify-between gap-[100px] overflow-hidden">
	<div class="mt-28 mb-[-500px] w-full">
		<Projects />
	</div>

	<div class="container">
		<Nav />
	</div>
</main>
