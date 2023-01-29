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

<footer class="absolute bottom-0 right-4 flex justify-end gap-10 items-center">
	<div class="flex justify-between gap-2 items-center text-xxs">
		<span>© 2023</span>
		<Swissflag />
		<span>Thomas Miller</span>
	</div>
	<div class="flex justify-between gap-4 items-center socials">
		{#each links as link}
			<a class="relative p-2" href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
				<svelte:component this={link.icon} />
				<span
					class="bg-tbeige rounded-full absolute w-14 h-14 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-[1] scale-75 opacity-0 duration-300"
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
