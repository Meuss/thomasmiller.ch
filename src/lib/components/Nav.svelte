<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import RightArrow from '$lib/icons/RightArrow.svelte';

	onMount(() => {
		const links = document.querySelectorAll('nav a');
		links.forEach((link) => {
			const arrow = link.querySelector('div');
			const otherLinks = Array.from(links).filter((l) => l !== link);
			gsap.defaults({ ease: 'power4.out' });
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
		});
	});
</script>

<nav class="flex flex-col items-start text-2xl uppercase font-warownia leading-none tracking-wide">
	<a href="/a-propos" class="flex items-center gap-3 -translate-x-[59px]">
		<div class="opacity-0"><RightArrow /></div>
		À propos
	</a>
	<a href="/projets" class="flex items-center gap-3 -translate-x-[59px]">
		<div class="opacity-0"><RightArrow /></div>
		Projets
	</a>
	<a href="/contact" class="flex items-center gap-3 -translate-x-[59px]">
		<div class="opacity-0"><RightArrow /></div>
		Contact
	</a>
</nav>

<style lang="postcss">
	/* nav {
		a {
			transition: all 0.25s ease-in-out;
			&:hover {
				color: theme('colors.torange');
        transform: translateX(0);
			}
		}
	} */
</style>
