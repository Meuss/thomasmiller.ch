<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		// testing gsap
		gsap.to('.test', {
			y: 100,
			duration: 1
		});
		gsap.to('p', {
			scrollTrigger: {
				trigger: '.text-red-500',
				start: 'top 80%',
				end: 'bottom 20%',
				scrub: true
			},
			x: 100,
			y: 100,
			rotate: 360,
			scale: 2,
			duration: 1
		});
	});
</script>

<div class="h-[2000px]">
	<h1 class="test text-red-500">Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</div>
