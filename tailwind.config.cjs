/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		// extend: {
		// }
		container: {
			center: true,
			padding: {
				DEFAULT: '1.5rem',
				'2xl': '6rem',
				xl: '0rem',
				lg: '4rem',
				sm: '0rem'
			}
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
		fontWeight: {
			thin: 100,
			extralight: 200,
			light: 300,
			normal: 400,
			medium: 500,
			semibold: 600,
			bold: 700,
			extrabold: 800,
			black: 900
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
			'3xl': '4rem'
		}
	},
	plugins: []
};
