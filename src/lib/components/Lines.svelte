<script>
	const lines = 8;
</script>

<div class="fixed -top-[50vh] left-0 right-0 bottom-0 w-full h-full z-[-9] pointer-events-none flex justify-around rotate-12">
	{#each Array(lines) as _, i}
		<div class="h-[300vh] w-[1px] bg-[rgba(255,255,255,0.05)]" />
	{/each}
</div>
