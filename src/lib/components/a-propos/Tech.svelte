<script>
	import { techs } from '$lib/data/techs.js';
</script>

<div class="">
	{#each techs as group, i}
		<h3 class="text-xs mb-3">{group.key}</h3>
		<div class="flex gap-8 mb-10">
			{#each group.icons as tech}
				<div class="{tech.span ? `col-span-${tech.span}` : 'col-span-1'} flex flex-col justify-center items-start">
					<img src="/tech-img/{tech.key}.svg" alt={tech.name} title={tech.name} />
					<!-- <span>{tech.name}</span> -->
				</div>
			{/each}
		</div>
	{/each}
</div>

<style lang="postcss">
</style>
