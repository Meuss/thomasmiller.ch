<script>
	import Nav from '$lib/components/Nav.svelte';
	import Scrambler from '$lib/components/accueil/Scrambler.svelte';
</script>

<svelte:head>
	<title>Thomas Miller, Développeur web freelance</title>
</svelte:head>

<main class="flex flex-col justify-between items-start relative gap-[100px]">
	<div class="container">
		<div class="text-xl leading-none font-warownia">Bonjour, je suis</div>
		<h1 class="text-3xl leading-none text-torange">Thomas Miller</h1>
	</div>

	<div class="container">
		<div class="max-w-[900px]">
			<Scrambler />
			<p>
				Je développe des projets en tant que freelancer pour des clients dans toute la Suisse. Actuellement chez <a
					href="https://marvelous.digital"
					target="_blank"
					rel="noreferrer">Marvelous Digital</a
				>
				et
				<a href="https://macmac.ch" target="_blank" rel="noreferrer">macmac</a>.
			</p>
			<p>Vous avez un projet en tête? <a href="/contact">Contactez-moi</a>.</p>
		</div>
	</div>
	<div class="container">
		<Nav />
	</div>
</main>
