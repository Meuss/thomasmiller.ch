<script>
	import Nav from '$lib/components/Nav.svelte';
	import Form from '$lib/components/contact/Form.svelte';
	import Card from '$lib/components/contact/Card.svelte';
</script>

<svelte:head>
	<title>Contact - Thomas Miller</title>
</svelte:head>

<main class="relative flex flex-col items-start justify-between gap-[100px]">
	<div class="container">
		<p>
			Intéressé à travailler ensemble?<br />
			Rencontrons-nous pour en discuter davantage!
		</p>
	</div>
	<div class="container">
		<div class="grid grid-cols-12 gap-5">
			<div class="col-span-4 col-start-2">
				<Card />
			</div>
			<div class="col-span-6 col-start-7">
				<Form />
			</div>
		</div>
	</div>

	<div class="container">
		<Nav />
	</div>
</main>
