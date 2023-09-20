<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Navigation } from 'swiper';
	import { projects } from '$lib/data/projects.js';
	import 'swiper/css/navigation';
	import 'swiper/css';
</script>

<div class="projects-wrapper relative">
	<Swiper
		speed={400}
		spaceBetween={10}
		slidesPerView={6}
		slidesPerGroup={5}
		loop={true}
		navigation
		modules={[Navigation]}
		class="project-swiper"
	>
		{#each projects as project, i}
			<SwiperSlide>
				<div class="flex h-full cursor-pointer flex-col px-4 py-3 text-sm shadow-2xl">
					<span class="font-warownia">{project.title}</span>
					<a href={project.url} target="_blank" rel="noreferrer" class="text-xs text-torange underline">{project.shorturl}</a>
					<span class="font-warownia">{project.year}</span>
				</div>
			</SwiperSlide>
		{/each}
	</Swiper>
</div>

<style lang="postcss">
	:global(.swiper) {
		overflow-y: visible;
		padding: 40px 0;
	}
	:global(.swiper-slide) {
		background-color: #2e2e2e;
		margin-bottom: 0;
		transition: 250ms all;
		height: 200px;
		/* aspect-ratio: 4/3; */
		&:hover {
			transform: scale(1.2);
			z-index: 2;
		}
	}
</style>
