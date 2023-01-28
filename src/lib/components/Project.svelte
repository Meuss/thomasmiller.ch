<script>
	import { gsap } from 'gsap';
	import ExternalLink from '$lib/icons/ExternalLink.svelte';
	import Macmac from '$lib/icons/Macmac.svelte';
	import Marvelous from '$lib/icons/Marvelous.svelte';

	export let project = {};

	gsap.defaults({ ease: 'power4.out' });
	const tl = gsap.timeline();
	tl.pause();
	function animate(element, play = true) {
		tl.set(element, { zIndex: 200 });
		tl.fromTo(
			element,
			{
				scale: 1,
				y: 0
			},
			{
				scale: 1.2,
				y: -50,
				duration: 0.5
			},
			0
		);
		const detailsDiv = element.querySelector('.details');
		tl.fromTo(
			detailsDiv,
			{
				y: -150,
				opacity: 0
			},
			{
				y: 0,
				opacity: 1,
				duration: 0.5
			},
			0
		);
		const details = element.querySelectorAll('.details *');
		tl.fromTo(
			details,
			{
				opacity: 0
			},
			{
				opacity: 1,
				duration: 0.3
			},
			0.2
		);
		if (play) {
			tl.play();
		} else {
			tl.reverse();
		}
	}

	function handleMouseEnter(event) {
		animate(event.target);
	}
	function handleMouseLeave(event) {
		animate(event.target, false);
	}
</script>

<div class="project relative" on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave}>
	<div class="relative z-20 aspect-[8/5]">
		<img class="object-cover" src="/project-img/{project.key}.jpg" alt={project.title} />
	</div>
	<div class="z-10 py-3 px-4 details bg-[#2e2e2e]">
		<a
			href={project.url}
			target="_blank"
			rel="noreferrer"
			class="text-xxs font-bold text-torange flex gap-2 mb-3 hover:underline"
		>
			{project.shorturl}
			<ExternalLink />
		</a>
		<div class="text-xxs mb-3"><strong>{project.title}</strong> - {project.description}</div>
		<div class="flex justify-between text-xs items-center">
			<strong>{project.year}</strong>
			<div class="w-16 flex">
				{#if project.where === 'macmac'}
					<Macmac fill="#FFECD1" />
				{:else if project.where === 'marvelous'}
					<Marvelous fill="#FFECD1" />
				{/if}
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.project {
		&:hover {
			filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
		}
	}
	.details {
		position: absolute;
		opacity: 0;
	}
</style>
