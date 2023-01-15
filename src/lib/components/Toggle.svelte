<script>
	import Toggle from 'svelte-toggle';
	import Pause from '$lib/icons/Pause.svelte';
	import Play from '$lib/icons/Play.svelte';
	import { fluidPlaying } from '$lib/stores/fluid.js';

	let toggled;

	fluidPlaying.subscribe((value) => {
		toggled = value;
	});

	function handleToggle(event) {
		fluidPlaying.set(event.detail);
	}
</script>

<div class="toggle-wrapper absolute top-0 right-4 z-10">
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
			: 'paused'} icons absolute top-0 left-0 flex w-full h-full justify-around items-center pointer-events-none"
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
