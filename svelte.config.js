import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			precompress: false,
			strict: true,
			fallback: '404.html'
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		}
	},
	extensions: [ '.svelte', '.svx', '.md' ],
	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex({
			extensions: [ '.svx', '.md' ]
		})
	]
};

export default config;
