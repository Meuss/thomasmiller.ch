<script>
	const lines = 8;
</script>

<div class="pointer-events-none fixed -top-[50vh] bottom-0 left-0 right-0 z-[-9] flex h-full w-full rotate-12 justify-around">
	{#each Array(lines) as _, i}
		<div class="h-[300vh] w-[1px] bg-[rgba(255,255,255,0.05)]" />
	{/each}
</div>
