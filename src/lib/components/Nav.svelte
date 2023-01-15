<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { gsap } from 'gsap';
	import RightArrow from '$lib/icons/RightArrow.svelte';

	const routes = [
		{
			name: 'À propos',
			path: '/a-propos'
		},
		{
			name: 'Projets',
			path: '/projets'
		},
		{
			name: 'Contact',
			path: '/contact'
		}
	];

	onMount(() => {
		const links = document.querySelectorAll('nav a');
		links.forEach((link) => {
			const arrow = link.querySelector('svg');
			const otherLinks = Array.from(links).filter((l) => l !== link);
			gsap.defaults({ ease: 'power4.out' });
			if(!link.classList.contains('active')) {
				link.addEventListener('mouseenter', () => {
					gsap.to(link, { x: 0, color: '#FF7D00', duration: 0.5 });
					gsap.to(otherLinks, { opacity: 0.5, duration: 0.2 });
					gsap.to(arrow, { opacity: 1, x: 0, duration: 0.7 });
				});
				link.addEventListener('mouseleave', () => {
					gsap.to(link, { x: -59, color: '#FFECD1', duration: 0.5 });
					gsap.to(otherLinks, { opacity: 1, duration: 0.2 });
					gsap.to(arrow, { opacity: 0, x: 0, duration: 0.7 });
				});
			}
		});
	});
</script>

<nav class="flex flex-col items-start text-2xl uppercase font-warownia leading-none tracking-wide">
	{#each routes as { name, path }, i}
		<a href={path} class="flex items-center gap-3 -translate-x-[59px]{$page.url.pathname === path ? ' active' : ''}">
			<div><RightArrow /></div>
			{name}
		</a>
	{/each}
</nav>

<style lang="postcss">
	nav :global(svg) {
		display: block;
		opacity: 0;
	}
	nav a.active {
		color: #ff7d00;
	}
</style>
