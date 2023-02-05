<script>
	import Quote from '$lib/icons/Quote.svelte';
	export let testimonial = {};
</script>

<div class="testimonial flex flex-col gap-5">
	<div class="flex items-end gap-4">
		<div
			class="flex aspect-square h-24 w-24 flex-col items-center justify-center overflow-hidden rounded-full border-2 border-tgray p-2"
		>
			<img src="/testimonial-img/{testimonial.image}" alt={testimonial.name} class="aspect-square rounded-full" />
		</div>

		<div class="flex gap-2 pb-4 text-tbeige">
			<strong>{testimonial.name}</strong> | <span>{testimonial.role}</span>
		</div>
	</div>
	<div class="relative">
		<p class="text-white">{testimonial.text}</p>
		<Quote />
		<Quote second="true" />
	</div>
</div>

<style lang="postcss">
</style>
