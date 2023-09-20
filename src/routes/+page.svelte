<script>
	import Footer from '$lib/components/Footer.svelte';
	import Scrambler from '$lib/components/Scrambler.svelte';
	import Swissflag from '$lib/icons/Swissflag.svelte';
</script>

<svelte:head>
	<title>Thomas Miller, Développeur web freelance</title>
</svelte:head>

<main class="relative flex flex-col items-start justify-between gap-[20px] sm:gap-11">
	<div class="container">
		<!-- <div class="text-xl leading-none font-warownia sm:text-lg">Bonjour, je suis</div> -->
		<h1 class="text-3xl leading-none sm:text-2xl xs:text-xl">Thomas Miller</h1>
	</div>

	<div class="container">
		<div class="max-w-[1000px]">
			<Scrambler />
			<div class="mt-20 xs:mt-4 xs:text-xs">
				<p>
					Je suis un développeur web passionné basé en Suisse <Swissflag /> prêt à concrétiser vos projets numériques dans tout le
					pays. Offrant des sites web, applications et solutions e-commerce performantes, je mets mon expertise en frontend, backend
					et SEO à votre service pour un résultat à la hauteur de vos ambitions. Votre succès, ma priorité !
				</p>
				<!-- <p>
					Actuellement chez <a href="https://marvelous.digital" target="_blank" rel="noreferrer">Marvelous&nbsp;Digital</a>
					et
					<a href="https://macmac.ch" target="_blank" rel="noreferrer">macmac</a>.
				</p> -->
			</div>
		</div>
		<div class="bot mt-20 flex items-center justify-between sm:flex-col sm:items-start xs:mt-8 xs:text-xs">
			<p class="mb-0 sm:mb-4">Un projet en tête? <br /><a href="mailto:thomas.miller147@gmail.com">Contactez-moi</a>.</p>
			<Footer />
		</div>
	</div>
</main>

<style lang="postcss">
	.bot br {
		display: none;
		@screen xs {
			display: block;
		}
	}
</style>
