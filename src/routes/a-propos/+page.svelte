<script>
	import Nav from '$lib/components/Nav.svelte';
	import LeftArrow from '$lib/icons/LeftArrow.svelte';
</script>

<svelte:head>
	<title>À propos</title>
</svelte:head>

<main class="relative flex flex-col items-start justify-between gap-[100px]">
	<div class="container">
		<p>
			<a href="/" class="flex -translate-x-[25px] items-center gap-2">
				<LeftArrow />
				Retour
			</a>
		</p>
		<h1>À propos</h1>
	</div>

	<div class="container">
		<div class="max-w-[900px]">
			<p>Swaggy McSwagg.</p>
			<p>Vous avez un projet en tête? <a href="/contact">Contactez-moi</a>.</p>
		</div>
	</div>

	<div class="container">
		<Nav />
	</div>
</main>
