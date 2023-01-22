<script>
	import Nav from '$lib/components/Nav.svelte';
	import LeftArrow from '$lib/icons/LeftArrow.svelte';
	import Projects from '$lib/components/Projects.svelte';
</script>

<svelte:head>
	<title>Projets</title>
</svelte:head>

<main class="flex flex-col justify-between items-start relative gap-[100px]">
	<div class="container">
		<p>
			<a href="/" class="flex gap-2 items-center -translate-x-[25px]">
				<LeftArrow />
				Retour
			</a>
		</p>
		<h1>Projets</h1>
	</div>

	<div class="w-full">
		<Projects />
	</div>

	<div class="container">
		<Nav />
	</div>
</main>
