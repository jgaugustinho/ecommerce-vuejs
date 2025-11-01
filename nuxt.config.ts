// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig( {
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	modules: [ '@nuxtjs/tailwindcss' ],
	app: {
		head: {
			title: 'E-commerce Vue.js',
			meta: [
				{ name: 'description', content: 'A simple e-commerce application built with Nuxt.js and Tailwind CSS' }
			],
			link: [
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
			]
		}
	}
} );