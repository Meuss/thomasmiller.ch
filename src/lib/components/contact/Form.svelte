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
			errors.name = 'Incognito ça passe pas';
		}
		if (!email) {
			errors.email = 'Email obligatoire';
		} else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
			errors.email = 'Email invalide';
		}
		if (!message) {
			errors.message = 'Il me faut un message!';
		}
	}
</script>

<form class="mb-4 bg-tgray px-8 pb-8 pt-6" on:submit|preventDefault={validate}>
	<div class="mb-4">
		<label class="mb-2 block text-sm text-tbeige" for="name">Nom *</label>
		<input
			class="w-full appearance-none bg-tblack px-4 py-3 text-xs text-tbeige"
			id="name"
			name="name"
			type="text"
			bind:value={name}
		/>
		{#if errors.name}
			<p class="text-xs italic text-torange">{errors.name}</p>
		{/if}
	</div>
	<div class="mb-4">
		<label class="mb-2 block text-sm text-tbeige" for="email">Email *</label>
		<input
			class="w-full appearance-none bg-tblack px-4 py-3 text-xs text-tbeige"
			id="email"
			name="email"
			type="email"
			bind:value={email}
		/>
		{#if errors.email}
			<p class="text-xs italic text-torange">{errors.email}</p>
		{/if}
	</div>
	<div class="mb-4">
		<label class="mb-2 block text-sm text-tbeige" for="telephone">Numéro de tél</label>
		<input
			class="w-full appearance-none bg-tblack px-4 py-3 text-xs text-tbeige"
			use:imask={options}
			id="telephone"
			name="telephone"
			type="tel"
			bind:value={telephone}
		/>
		{#if errors.telephone}
			<p class="text-xs italic text-torange">{errors.telephone}</p>
		{/if}
	</div>
	<div class="mb-4">
		<label class="mb-2 block text-sm text-tbeige" for="message">Parlez-moi de votre projet, votre besoin ou autre.. *</label>
		<textarea
			rows="5"
			class="w-full appearance-none bg-tblack px-4 py-3 text-xs text-tbeige"
			id="message"
			name="message"
			bind:value={message}
		/>
		{#if errors.message}
			<p class="text-xs italic text-torange">{errors.message}</p>
		{/if}
	</div>
	<div>
		<input class="font-warownia uppercase" type="submit" value="Envoyer" />
	</div>
</form>

<style lang="postcss">
	input[type='text'],
	input[type='email'],
	input[type='tel'],
	textarea {
		background-color: theme('colors.tblack');
	}
</style>
