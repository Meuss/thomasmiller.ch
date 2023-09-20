import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	plugins: [sveltekit()],
	ssr: {
		noExternal: ['gsap', '@gsap/shockingly', 'swiper', 'swiper/svelte']
	}
};

export default config;
