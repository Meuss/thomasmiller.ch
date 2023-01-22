<script>
	import ExternalLink from '$lib/icons/ExternalLink.svelte';
	import Macmac from '$lib/icons/Macmac.svelte';
	import Marvelous from '$lib/icons/Marvelous.svelte';

	export let project = {};
</script>

<div class="project">
	<img src="/project-img/{project.key}.jpg" alt={project.title} />
	<div class="py-3 px-4 details bg-[#2e2e2e]">
		<a href={project.url} target="_blank" rel="noreferrer" class="text-xxs font-bold text-torange underline flex gap-2 mb-3">
			{project.shorturl}
			<ExternalLink />
		</a>
		<div class="text-xxs mb-3"><strong>{project.title}</strong> - {project.description}</div>
		<div class="flex justify-between text-xs items-center">
			<strong>{project.year}</strong>
			<div class="w-16 flex">
				{#if project.where === 'macmac'}
					<Macmac fill="#FFECD1" />
				{:else if project.where === 'marvelous'}
					<Marvelous fill="#FFECD1" />
				{/if}
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
</style>
