<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Navigation } from 'swiper';
	import { projects } from '$lib/data/projects.js';
	import Project from '$lib/components/Project.svelte';
	import 'swiper/css/navigation';
	import 'swiper/css';

	let offset = 100;
</script>

<div class="projects">
	{#each projects as projectGroup, i}
		<div class="projects-wrapper relative">
			<Swiper
				speed={400}
				spaceBetween={10}
				slidesPerView={5.5}
				slidesOffsetBefore={offset}
				slidesOffsetAfter={offset}
				navigation
				modules={[Navigation]}
				class="project-swiper"
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
			transform: translateY(-200px);
		}
	}
	:global(.swiper) {
		position: unset !important;
		overflow: visible;
	}
	:global(.swiper-slide) {
		background-color: #2e2e2e;
		margin-bottom: 0;
		transition: 250ms all;
		height: 176px;
		transform-origin: center bottom;
		&:hover {
			transform: scale(1.3) translateY(-50px);
			z-index: 2;
			filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
			z-index: 20;
			:global(.details) {
				opacity: 1;
				pointer-events: auto;
			}
		}
	}
	:global(.details) {
		opacity: 0;
		transition: 250ms all;
		pointer-events: none;
	}
</style>
