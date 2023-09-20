<script>
	import Toggle from 'svelte-toggle';
	import Pause from '$lib/icons/Pause.svelte';
	import Play from '$lib/icons/Play.svelte';
	import { fluidStore } from '$lib/stores/fluid.js';

	let toggled;

	fluidStore.subscribe((value) => {
		toggled = value.status;
	});

	function handleToggle(event) {
		fluidStore.set({
			status: event.detail,
			mouseX: event.clientX,
			mouseY: event.clientY
		});
	}
</script>

<div class="toggle-wrapper absolute right-4 top-0 z-10 sm:hidden">
	<Toggle
		hideLabel
		label="Turn off visual effects"
		switchColor="#FFECD1"
		toggledColor="#2E2E2E"
		untoggledColor="#2E2E2E"
		on:toggle={handleToggle}
		bind:toggled
	/>
	<div
		class="{toggled
			? 'playing'
			: 'paused'} icons pointer-events-none absolute left-0 top-0 flex h-full w-full items-center justify-around"
	>
		<Pause />
		<Play />
	</div>
</div>

<style lang="postcss">
	.toggle-wrapper {
		:global(button) {
			width: 110px;
			height: 35px;
			&::before {
				height: 31px;
				width: 50%;
				border-radius: 1rem;
			}
		}
		:global(button[aria-checked='false']):before {
			left: auto;
			transform: translateX(-53px);
		}
		:global(button[aria-checked='true']):before {
			left: auto;
			right: 2px;
			transform: translateX(0);
		}
	}
	.icons.playing {
		:global(#pause-icon path) {
			fill: theme('colors.tbeige');
			fill-opacity: 0.5;
		}
		:global(#play-icon path) {
			fill: theme('colors.torange');
		}
	}
	.icons.paused {
		:global(#pause-icon path) {
			fill: theme('colors.torange');
		}
		:global(#play-icon path) {
			fill: theme('colors.tbeige');
			fill-opacity: 0.5;
		}
	}
</style>
