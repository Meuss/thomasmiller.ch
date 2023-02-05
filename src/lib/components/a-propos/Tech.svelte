<script>
	import { techs } from '$lib/data/techs.js';
	import { tooltip } from '$lib/components/tooltip/tooltip';
</script>

<div class="select-none">
	{#each techs as group, i}
		<h3 class="mb-3 text-xs">{group.key}</h3>
		<div class="mb-10 grid grid-cols-10 gap-x-4 gap-y-8">
			{#each group.icons as tech}
				<div class="{`col-span-${tech.span}`} flex flex-col items-start justify-center">
					<img src="/tech-img/{tech.key}.svg" alt={tech.key} title={tech.key} use:tooltip />
				</div>
			{/each}
		</div>
	{/each}
</div>

<style lang="postcss">
	.col-span-2 img {
		transform: scale(1.1);
	}
</style>
