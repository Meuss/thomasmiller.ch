<script>
	import Nav from '$lib/components/Nav.svelte';
	import Tech from '$lib/components/a-propos/Tech.svelte';
</script>

<svelte:head>
	<title>À propos - Thomas Miller</title>
</svelte:head>

<main class="relative flex flex-col items-start justify-between gap-[100px]">
	<div class="container">
		<h1 class="max-w-[900px]">Création des sites web depuis 2015,<br />une expertise en constante évolution.</h1>
	</div>

	<div class="container">
		<div class="grid grid-cols-12 gap-20">
			<div class="col-span-5 text-sm">
				<p>
					Je suis un développeur web fullstack expérimenté avec une solide compréhension des technologies frontend et backend.
				</p>

				<p>
					Je maîtrise plusieurs langages de programmation et CMS différents, et j'ai également une bonne connaissance de la
					gestion de la base de données et de l'optimisation des performances des applications web.
				</p>

				<p>
					Je suis passionné par la création de sites web et d'applications robustes, esthétiquement plaisants et faciles à
					utiliser pour les utilisateurs finaux.
				</p>
				<hr class="mt-20 mb-5" />
				<h3>Témoignages</h3>
			</div>
			<div class="col-span-7 text-sm">
				<Tech />
			</div>
		</div>
	</div>

	<div class="container">
		<Nav />
	</div>
</main>
