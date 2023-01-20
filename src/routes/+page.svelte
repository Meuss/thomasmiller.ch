<script>
	import Footer from '$lib/components/Footer.svelte';
	import Scrambler from '$lib/components/Scrambler.svelte';
</script>

<svelte:head>
	<title>Thomas Miller, Développeur web freelance</title>
</svelte:head>

<main class="flex flex-col justify-between items-start relative gap-[100px] sm:gap-11">
	<div class="container">
		<div class="text-xl leading-none font-warownia sm:text-lg">Bonjour, je suis</div>
		<h1 class="text-3xl leading-none text-torange sm:text-2xl">Thomas Miller</h1>
	</div>

	<div class="container">
		<div class="max-w-[900px]">
			<Scrambler />
			<div class="mt-20">
				<p>Je développe des projets en tant que freelancer pour des clients dans toute la Suisse.</p>
				<p>
					Actuellement chez <a href="https://marvelous.digital" target="_blank" rel="noreferrer">Marvelous&nbsp;Digital</a>
					et
					<a href="https://macmac.ch" target="_blank" rel="noreferrer">macmac</a>.
				</p>
			</div>
		</div>
		<div class="mt-20 flex justify-between md:flex-col sm:items-center sm:text-center">
			<p>Vous avez un projet en tête? <br /><a href="mailto:thomas.miller147@gmail.com">Contactez-moi</a>.</p>
			<Footer />
		</div>
	</div>
</main>
