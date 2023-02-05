<script>
	export let second = false;
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 70 70"
	width="70"
	height="70"
	class="{second ? 'rotate-180' : ''} absolute -z-10 opacity-50"
>
	<rect x="0" y="40" width="30" height="30" />
	<path d="M 0 40 q 0 -40 30 -40 v 15 q -15 0 -15 25" />
	<rect x="40" y="40" width="30" height="30" />
	<path d="M 40 40 q 0 -40 30 -40 v 15 q -15 0 -15 25" />
</svg>

<style lang="postcss">
	svg {
		top: -5px;
		left: 1%;
		&.rotate-180 {
			top: auto;
			bottom: 0%;
			left: auto;
			right: 5%;
		}
	}
	rect,
	path {
		fill: theme('colors.tgray');
	}
</style>
