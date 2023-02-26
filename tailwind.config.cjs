/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily : {
				'primary' : ['Hanken Grotesk', 'Poppins', 'Helvetica', 'sans-serif'],
				'secondary' : ['Poppins', 'Helvetica', 'sans-serif']
			},
			colors : {
				primary : {
					100 : 'hsl(230, 30%, 93%)',
					150 : 'hsl(230, 30%, 85%)',
					200 : 'hsl(230, 30%, 80%)',
					300 : 'hsl(230, 30%, 70%)',
					400 : 'hsl(230, 30%, 60%)',
					500 : 'hsl(230, 30%, 50%)',
					600 : 'hsl(230, 30%, 40%)',
					700 : 'hsl(230, 30%, 30%)',
					800 : 'hsl(230, 30%, 20%)',
					900 : 'hsl(230, 30%, 10%)',
				},
				secondary : {
					100 : 'hsl(0, 45%, 87%)',
					200 : 'hsl(0, 45%, 80%)',
					300 : 'hsl(0, 45%, 70%)',
					400 : 'hsl(0, 45%, 60%)',
					500 : 'hsl(0, 45%, 50%)',
					600 : 'hsl(0, 45%, 40%)',
					700 : 'hsl(0, 45%, 30%)',
					800 : 'hsl(0, 45%, 20%)',
					900 : 'hsl(0, 45%, 10%)',
				}
			}
		},
	},
	plugins: [],
}
