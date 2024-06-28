<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { TextPlugin } from 'gsap/TextPlugin';

	const phrases = [
		'Développeur web freelance',
		'Je fais [des sites web]',
		'Je développe [des applications]',
		'Je gère le [frontend]',
		'Je gère le [backend]',
		"J'ai [l'expérience]",
		'Je fais du [e-commerce]',
		'Je suis [un passionné]',
		"[Je suis celui qu'il vous faut]",
		'Développeur web freelance'
	];

	$: newPhrases = phrases.map((phrase) => {
		const match = phrase.match(/\[(.*?)\]/);
		if (!match) {
			return phrase;
		}
		const [, text] = match;
		const characters = text.split('').map((char) => `<span>${char}</span>`);
		return phrase.replace(/[\[\]]/g, '').replace(text, characters.join(''));
	});

	onMount(() => {
		gsap.registerPlugin(TextPlugin);
		const tl = gsap.timeline({ repeat: -1 });
		newPhrases.forEach((phrase, i) => {
			tl.to('#scrambler', { duration: 1.5, text: phrase, delay: 2 });
		});
	});
</script>

<h2 id="scrambler" class="text-2xl sm:text-xl xs:text-base xs:leading-10">Développeur web freelance</h2>

<style lang="postcss">
	#scrambler {
		word-spacing: 1px;
		:global(span) {
			color: theme(colors.torange);
		}
	}
</style>
