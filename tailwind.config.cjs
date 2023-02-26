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
					100 : 'hsl(200, 14%, 90%)',
					200 : 'hsl(200, 14%, 80%)',
					300 : 'hsl(200, 14%, 70%)',
					400 : 'hsl(200, 14%, 60%)',
					500 : 'hsl(200, 14%, 50%)',
					600 : 'hsl(200, 14%, 40%)',
					700 : 'hsl(200, 14%, 30%)',
					800 : 'hsl(200, 14%, 20%)',
					900 : 'hsl(200, 14%, 10%)',
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
