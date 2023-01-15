import { writable } from 'svelte/store';

export const fluidStore = writable({
	status: true,
	// wanted to create a small splat on toggle on
	mouseX: 0,
	mouseY: 0
});
