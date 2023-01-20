<script>
	import Nav from '$lib/components/Nav.svelte';
	import LeftArrow from '$lib/icons/LeftArrow.svelte';

	let name = '';
	let email = '';
	let telephone = '';
	let message = '';
	let errors = {};
	function validate() {
		errors = {};
		if (!name) {
			errors.name = 'Name is required';
		}
		if (!email) {
			errors.email = 'Email is required';
		} else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
			errors.email = 'Email is invalid';
		}
		if (!telephone) {
			errors.telephone = 'Telephone is required';
		} else if (!/^\\+[0-9]{2} [0-9]{2} [0-9]{3} [0-9]{2} [0-9]{2}$/.test(telephone)) {
			errors.telephone = 'Telephone is invalid';
		}
		if (!message) {
			errors.message = 'Message is required';
		}
	}
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<main class="flex flex-col justify-between items-start relative gap-[100px]">
	<div class="container">
		<p>
			<a href="/" class="flex gap-2 items-center -translate-x-[25px]">
				<LeftArrow />
				Retour
			</a>
		</p>
		<h1>Contact</h1>
	</div>

	<div class="container">
		<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" on:submit|preventDefault={validate}>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="name"> Name </label>
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="name"
					name="name"
					type="text"
					placeholder="Your name.."
					bind:value={name}
				/>
				{#if errors.name}
					<p class="text-red-500 text-xs italic">{errors.name}</p>
				{/if}
			</div>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="email"> Email </label>
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="email"
					name="email"
					type="text"
					placeholder="Your email.."
					bind:value={email}
				/>
				{#if errors.email}
					<p class="text-red-500 text-xs italic">{errors.email}</p>
				{/if}
			</div>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="telephone"> Telephone </label>
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="telephone"
					name="telephone"
					type="text"
					placeholder="Your telephone.."
					bind:value={telephone}
				/>
				{#if errors.telephone}
					<p class="text-red-500 text-xs italic">{errors.telephone}</p>
				{/if}
			</div>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="message"> Message </label>
				<textarea
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="message"
					name="message"
					placeholder="Write something.."
					bind:value={message}
				/>
				{#if errors.message}
					<p class="text-red-500 text-xs italic">{errors.message}</p>
				{/if}
			</div>
		</form>
	</div>

	<div class="container">
		<Nav />
	</div>
</main>
