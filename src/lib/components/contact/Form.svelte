<script>
	import { imask } from '@imask/svelte';

	const options = {
		mask: '+{41} 00 000 00 00'
	};

	let name = '';
	let email = '';
	let telephone = '';
	let message = '';
	let errors = {};
	function validate() {
		errors = {};
		if (!name) {
			errors.name = 'Incognito ça passe pas!';
		}
		if (!email) {
			errors.email = 'Email requis';
		} else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
			errors.email = 'Email invalide';
		}
		if (!message) {
			errors.message = 'Il me faut un message!';
		}
	}
</script>

<form class="bg-tgray px-8 pt-6 pb-8 mb-4" on:submit|preventDefault={validate}>
	<div class="mb-4">
		<label class="block text-tbeige text-sm mb-2" for="name">Nom *</label>
		<input
			class="bg-tblack appearance-none w-full py-3 px-4 text-xs text-tbeige"
			id="name"
			name="name"
			type="text"
			bind:value={name}
		/>
		{#if errors.name}
			<p class="text-torange text-xs italic">{errors.name}</p>
		{/if}
	</div>
	<div class="mb-4">
		<label class="block text-tbeige text-sm mb-2" for="email">Email *</label>
		<input
			class="bg-tblack appearance-none w-full py-3 px-4 text-xs text-tbeige"
			id="email"
			name="email"
			type="email"
			bind:value={email}
		/>
		{#if errors.email}
			<p class="text-torange text-xs italic">{errors.email}</p>
		{/if}
	</div>
	<div class="mb-4">
		<label class="block text-tbeige text-sm mb-2" for="telephone">Numéro de tél</label>
		<!-- <input
			class="bg-tblack appearance-none w-full py-3 px-4 text-xs text-tbeige"
			id="telephone"
			name="telephone"
			type="text"
			bind:value={telephone}
		/> -->
		<input
			class="bg-tblack appearance-none w-full py-3 px-4 text-xs text-tbeige"
			use:imask={options}
			id="telephone"
			name="telephone"
			type="tel"
			bind:value={telephone}
		/>
		{#if errors.telephone}
			<p class="text-torange text-xs italic">{errors.telephone}</p>
		{/if}
	</div>
	<div class="mb-4">
		<label class="block text-tbeige text-sm mb-2" for="message">Parlez-moi de votre projet, votre besoin ou autre.. *</label>
		<textarea
			rows="5"
			class="bg-tblack appearance-none w-full py-3 px-4 text-xs text-tbeige"
			id="message"
			name="message"
			bind:value={message}
		/>
		{#if errors.message}
			<p class="text-torange text-xs italic">{errors.message}</p>
		{/if}
	</div>
	<div>
		<input class="font-warownia uppercase" type="submit" value="Envoyer" />
	</div>
</form>

<style lang="postcss">
</style>
