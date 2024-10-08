import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#4d09ed"
				},
				low: {
					DEFAULT: "#6445dd"
				},
				hard: {
					DEFUALT: "#1a05af"
				}
			},
			fontFamily: {
				sans: ['Outfit', ...defaultTheme.fontFamily.sans],
			},

		},
	},
	plugins: [],
}
