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
					100 : 'hsl(202, 14%, 90%)',
					200 : 'hsl(202, 14%, 80%)',
					300 : 'hsl(202, 14%, 70%)',
					400 : 'hsl(202, 14%, 60%)',
					500 : 'hsl(202, 14%, 50%)',
					600 : 'hsl(202, 14%, 40%)',
					700 : 'hsl(202, 14%, 30%)',
					800 : 'hsl(202, 14%, 20%)',
					900 : 'hsl(202, 14%, 10%)',
				},
				secondary : {
					100 : 'hsl(345, 45%, 87%)',
					200 : 'hsl(345, 45%, 80%)',
					300 : 'hsl(345, 45%, 70%)',
					400 : 'hsl(345, 45%, 60%)',
					500 : 'hsl(345, 45%, 50%)',
					600 : 'hsl(345, 45%, 40%)',
					700 : 'hsl(345, 45%, 30%)',
					800 : 'hsl(345, 45%, 20%)',
					900 : 'hsl(345, 45%, 10%)',
				}
			}
		},
	},
	plugins: [],
}
