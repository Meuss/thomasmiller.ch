/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			container: {
				center: true,
				padding: '1rem'
			},
			screens: {
				xl: { max: '1920px' },
				lg: { max: '1400px' },
				md: { max: '1023px' },
				sm: { max: '767px' },
				xs: { max: '480px' }
			},
			fontFamily: {
				archivo: ['Archivo', 'Helvetica', 'sans-serif'],
				warownia: ['Warownia', 'Helvetica', 'sans-serif']
			},
			colors: {
				tblack: '#010101',
				tgray: '#2E2E2E',
				torange: '#FF7D00',
				tbeige: '#FFECD1'
			},
			fontSize: {
				xxs: '1rem', // 16px
				xs: '1.125rem', // 18px
				sm: '1.25rem', // 20px
				md: '1.375rem', // 22px
				base: '1.5rem', // 24px
				lg: '1.875rem', // 30px
				xl: '2.5rem', // 40px
				'2xl': '3.125rem', // 50px
				'3xl': '5rem' // 80px
			}
		}
	},
	plugins: []
};
