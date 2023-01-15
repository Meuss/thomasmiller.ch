<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import Footer from '$lib/components/Footer.svelte';
	import Toggle from '$lib/components/Toggle.svelte';
	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
	});
</script>

<svelte:head>
	<title>Thomas Miller, Développeur web freelance</title>
</svelte:head>

<main class="flex flex-col justify-between h-full relative">
	<Toggle />
	<div>
		<div class="text-xl leading-none">Bonjour, je suis</div>
		<h1 class="text-3xl leading-none">Thomas Miller</h1>
	</div>

	<div>
		<h2>Développeur web freelance</h2>
		<p>
			Je développe des projets en tant que freelancer pour des clients dans toute la Suisse. Actuellement en train de construire
			des trucs cool chez <a href="https://marvelous.digital" target="_blank" rel="noreferrer">Marvelous Digital</a> et
			<a href="https://macmac.ch" target="_blank" rel="noreferrer">macmac</a>.
		</p>
		<p>Vous avez un projet en tête? <a href="/">Contactez-moi</a>.</p>
	</div>

	<nav class="flex flex-col items-start">
		<a href="/a-propos">À propos</a>
		<a href="/projets">Projets</a>
		<a href="/contact">Contact</a>
	</nav>

	<Footer />
</main>
