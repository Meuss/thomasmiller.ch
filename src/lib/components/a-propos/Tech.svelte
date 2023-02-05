<script>
	import { techs } from '$lib/data/techs.js';
	import { tooltip } from '$lib/components/tooltip/tooltip';
</script>

<div class="">
	{#each techs as group, i}
		<h3 class="mb-3 text-xs">{group.key}</h3>
		<div class="mb-10 flex gap-8">
			{#each group.icons as tech}
				<div class="{tech.span ? `col-span-${tech.span}` : 'col-span-1'} flex flex-col items-start justify-center">
					<img src="/tech-img/{tech.key}.svg" alt={tech.name} title={tech.name} use:tooltip />
				</div>
			{/each}
		</div>
	{/each}
</div>

<style lang="postcss">
</style>
