<script>
	import Swissflag from '$lib/icons/Swissflag.svelte';
	import Email from '$lib/icons/Email.svelte';
	import Github from '$lib/icons/Github.svelte';
	import Linkedin from '$lib/icons/Linkedin.svelte';
</script>

<footer class="flex justify-between gap-2 items-center">
	<div class="flex justify-between gap-1 items-center">
		<span>© 2023</span>
		<Swissflag />
		<span>Thomas Miller</span>
	</div>
	<div class="flex justify-between gap-1 items-center">
		<Email />
		<Github />
		<Linkedin />
	</div>
</footer>
