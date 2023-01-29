<script>
	import { onMount } from 'svelte';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { gsap } from 'gsap';
	import { Navigation } from 'swiper';
	import { projects } from '$lib/data/projects.js';
	import Project from '$lib/components/projets/Project.svelte';
	import 'swiper/css/navigation';
	import 'swiper/css';

	let ready = false;
	let offset = 100;
	let mouseIn = 0;
	onMount(() => {
		const tl = gsap.timeline();
		tl.fromTo(
			'.project-swiper',
			{
				opacity: 0,
				pointerEvents: 'none'
			},
			{
				opacity: 1,
				pointerEvents: 'auto',
				duration: 0.3,
				delay: 0.3
			}
		);
	});
</script>

<div class="projects">
	{#each projects as projectGroup, i}
		<div class="projects-wrapper relative">
			<Swiper
				speed={400}
				spaceBetween={10}
				slidesPerView={6.5}
				slidesOffsetBefore={offset}
				slidesOffsetAfter={offset}
				navigation
				modules={[Navigation]}
				class="{ready ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'} project-swiper transition-opacity"
				on:afterInit={() => {
					setTimeout(() => {
						ready = true;
					}, 300);
				}}
				on:mouseenter={() => (mouseIn = i)}
			>
				{#each projectGroup as project, i}
					<SwiperSlide>
						<Project {project} />
					</SwiperSlide>
				{/each}
			</Swiper>
		</div>
	{/each}
</div>

<style lang="postcss">
	.projects-wrapper {
		overflow-x: hidden;
		padding: 300px 0;
		margin-top: -300px;
		&:nth-of-type(2) {
			transform: translateY(-230px);
		}
	}
	:global(.swiper) {
		position: unset !important;
		overflow: visible;
	}
	:global(.swiper-slide) {
		user-select: none;
		margin-bottom: 0;
	}
</style>
