<script>
	import Swissflag from '$lib/icons/Swissflag.svelte';
	import Email from '$lib/icons/Email.svelte';
	import Github from '$lib/icons/Github.svelte';
	import Linkedin from '$lib/icons/Linkedin.svelte';

	const links = [
		{
			label: 'Me contacter par email',
			icon: Email,
			url: 'mailto:thomas.miller147@gmail.com'
		},
		{
			label: 'Mon profil Github',
			icon: Github,
			url: 'https://github.com/Meuss'
		},
		{
			label: 'Mon profil LinkedIn',
			icon: Linkedin,
			url: 'https://www.linkedin.com/in/thomas-miller-671589a3'
		}
	];
</script>

<footer class="absolute bottom-0 right-4 flex items-center justify-end gap-10">
	<div class="flex items-center justify-between gap-2 text-xxs">
		<span>© 2023</span>
		<Swissflag />
		<span>Thomas Miller</span>
	</div>
	<div class="socials flex items-center justify-between gap-4">
		{#each links as link}
			<a class="relative p-2" href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
				<svelte:component this={link.icon} />
				<span
					class="absolute top-1/2 left-1/2 -z-[1] h-14 w-14 -translate-x-1/2 -translate-y-1/2 scale-75 rounded-full bg-tbeige opacity-0 duration-300"
				/>
			</a>
		{/each}
	</div>
</footer>

<style lang="postcss">
	.socials {
		a {
			:global(svg path) {
				transition: fill 0.25s ease-in-out;
				fill: theme('colors.tbeige');
			}
			&:hover {
				:global(.email path) {
					fill: #d34a47;
				}
				:global(.github path) {
					fill: #010409;
				}
				:global(.linkedin path) {
					fill: #0077b5;
				}
				span {
					transform: translate(-50%, -50%) scale(1);
					opacity: 1;
				}
			}
		}
	}
</style>
