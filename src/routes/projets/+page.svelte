<script>
	import Nav from '$lib/components/Nav.svelte';
	import Projects from '$lib/components/projets/Projects.svelte';
</script>

<svelte:head>
	<title>Projets - Thomas Miller</title>
</svelte:head>

<main class="flex flex-col justify-between items-start relative gap-[100px] overflow-hidden">
	<div class="w-full mt-28 mb-[-500px]">
		<Projects />
	</div>

	<div class="container">
		<Nav />
	</div>
</main>
