<script>
	import { gsap } from 'gsap';
	import ExternalLink from '$lib/icons/ExternalLink.svelte';
	import Macmac from '$lib/icons/Macmac.svelte';
	import Marvelous from '$lib/icons/Marvelous.svelte';

	export let project = {};

	gsap.defaults({ ease: 'power4.inOut' });
	const tl = gsap.timeline();
	tl.pause();
	function animate(element, play = true) {
		tl.set(element, { zIndex: 200 }, 0.2);
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
				// y: -150,
				yPercent: 0,
				opacity: 0
			},
			{
				// y: 0,
				opacity: 1,
				yPercent: 100,
				duration: 0.5
			},
			0
		);
		const details = element.querySelectorAll('.details > *');
		tl.fromTo(
			details,
			{
				opacity: 0,
				y: 5
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.3,
				stagger: 0.1
			},
			0.5
		);
		if (play) {
			tl.timeScale(1);
			tl.play();
		} else {
			tl.timeScale(1.5);
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

<div class="project relative will-change-transform" on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave}>
	<div class="relative z-20 aspect-[8/5]">
		<img class="object-cover" src="/project-img/{project.key}.jpg" alt={project.title} />
	</div>
	<div class="details z-10 bg-[#2e2e2e] py-3 px-4">
		<a
			href={project.url}
			target="_blank"
			rel="noreferrer"
			class="mb-3 flex gap-2 text-xxs font-bold text-torange will-change-transform hover:underline"
		>
			{project.shorturl}
			<ExternalLink />
		</a>
		<div class="mb-3 text-xxs will-change-transform"><strong>{project.title}</strong> - {project.description}</div>
		<div class="flex items-center justify-between text-xs will-change-transform">
			<strong>{project.year}</strong>
			<div class="flex w-16">
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
		transform: translateY(-100%);
		opacity: 0;
	}
</style>
