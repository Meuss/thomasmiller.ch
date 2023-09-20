<script>
	import Nav from '$lib/components/Nav.svelte';
	import LeftArrow from '$lib/icons/LeftArrow.svelte';
	import Projects from '$lib/components/Projects.svelte';
</script>

<svelte:head>
	<title>Projets</title>
</svelte:head>

<main class="relative flex flex-col items-start justify-between gap-[100px]">
	<div class="container">
		<p>
			<a href="/" class="flex -translate-x-[25px] items-center gap-2">
				<LeftArrow />
				Retour
			</a>
		</p>
		<h1>Projets</h1>
	</div>

	<div class="w-screen">
		<Projects />
	</div>

	<div class="container">
		<Nav />
	</div>
</main>
