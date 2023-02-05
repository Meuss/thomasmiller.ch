<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Pagination, Autoplay, EffectFade } from 'swiper';
	import { testimonials } from '$lib/data/testimonials.js';
	import Testimonial from '$lib/components/a-propos/Testimonial.svelte';
	import 'swiper/css';
	import 'swiper/css/pagination';
	import 'swiper/css/effect-fade';
</script>

<div class="testimonials-wrapper relative">
	<div class="projects-wrapper relative">
		<Swiper
			speed={400}
			modules={[Pagination, Autoplay, EffectFade]}
			effect="fade"
			autoplay={{
				delay: 5000,
				disableOnInteraction: true
			}}
			fadeEffect={{
				crossFade: true
			}}
			pagination={{ clickable: true }}
		>
			{#each testimonials as testimonial, i}
				<SwiperSlide>
					<Testimonial {testimonial} />
				</SwiperSlide>
			{/each}
		</Swiper>
	</div>
</div>

<style lang="postcss">
</style>
