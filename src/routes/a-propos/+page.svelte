<script>
	import Nav from '$lib/components/Nav.svelte';
	import LeftArrow from '$lib/icons/LeftArrow.svelte';
</script>

<svelte:head>
	<title>À propos</title>
</svelte:head>

<main class="flex flex-col justify-between items-start relative gap-[100px]">
	<div>
		<p>
			<a href="/" class="flex gap-2 items-center -translate-x-[25px]">
				<LeftArrow />
				Retour
			</a>
		</p>
		<h1>À propos</h1>
	</div>

	<div class="max-w-[900px]">
		<p>Swaggy McSwagg.</p>
		<p>Vous avez un projet en tête? <a href="/contact">Contactez-moi</a>.</p>
	</div>

	<Nav />
</main>
