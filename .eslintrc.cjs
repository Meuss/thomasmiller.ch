module.exports = {
	root: true,
	extends: ['plugin:svelte/recommended', 'plugin:svelte/prettier'],
	plugins: [],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		'svelte/a11y-no-static-element-interactions': 'error'
	}
};
