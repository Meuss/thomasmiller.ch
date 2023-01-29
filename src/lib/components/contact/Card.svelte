<script>
	import Profile from '$lib/icons/Profile.svelte';
	import Pin from '$lib/icons/Pin.svelte';
	import Mail from '$lib/icons/Mail.svelte';
	import Phone from '$lib/icons/Phone.svelte';
	import GithubOutline from '$lib/icons/GithubOutline.svelte';
	import LinkedinOutline from '$lib/icons/LinkedinOutline.svelte';

	const links = [
		{
			text: 'Thomas Miller',
			icon: Profile
		},
		{
			text: 'Rue de Vevey 246, 1630 Bulle',
			icon: Pin
		},
		{
			text: 'thomas.miller147@gmail.com',
			icon: Mail,
			href: 'mailto:thomas.miller147@gmail.com'
		},
		{
			text: '+41 79 123 45 67',
			icon: Phone,
			href: 'tel:+41791234567'
		},
		{
			text: 'Linkedin',
			icon: LinkedinOutline,
			href: 'https://www.linkedin.com/in/thomas-miller-671589a3'
		},
		{
			text: 'Github',
			icon: GithubOutline,
			href: 'https://github.com/Meuss'
		}
	];
</script>

<div class="bg-tgray p-8 text-xs">
	<div class="flex flex-col">
		{#each links as link}
			<div class="flex items-center mb-6">
				<div class="bg-tlightbeige w-10 h-10 p-2 mr-8 rounded-full text-tblack">
					<svelte:component this={link.icon} />
				</div>
				{#if link.href}
					<a href={link.href}>{link.text}</a>
				{:else}
					{link.text}
				{/if}
			</div>
		{/each}
	</div>
</div>
