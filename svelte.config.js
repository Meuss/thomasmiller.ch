import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import nesting from 'postcss-nesting';
// import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	// preprocess: vitePreprocess()
	preprocess: [
		preprocess({
			postcss: {
				plugins: [nesting()]
			}
		})
	]
};

export default config;
