<script>
	import Swissflag from '$lib/icons/Swissflag.svelte';
	import Email from '$lib/icons/Email.svelte';
	import Github from '$lib/icons/Github.svelte';
	import Linkedin from '$lib/icons/Linkedin.svelte';
</script>

<footer class="absolute bottom-0 right-4 flex justify-end gap-10 items-center">
	<div class="flex justify-between gap-2 items-center text-xxs">
		<span>© 2023</span>
		<Swissflag />
		<span>Thomas Miller</span>
	</div>
	<div class="flex justify-between gap-4 items-center socials">
		<a href="mailto:thomas.miller147@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Me contacter par email">
			<Email />
		</a>
		<a href="https://github.com/Meuss" target="_blank" rel="noopener noreferrer" aria-label="Mon profil Github">
			<Github />
		</a>
		<a
			href="https://www.linkedin.com/in/thomas-miller-671589a3/"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Mon profil Linkedin"
		>
			<Linkedin />
		</a>
	</div>
</footer>

<style lang="postcss">
	.socials {
		a {
			:global(svg path) {
				transition: fill 0.25s ease-in-out;
				fill: theme('colors.tbeige');
			}
			&:hover :global(svg path) {
				fill: theme('colors.torange');
			}
		}
	}
</style>
