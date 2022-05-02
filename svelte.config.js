import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import fs from 'fs';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					$components:path.resolve('./src/components'),
					$json:		path.resolve('./src/json'),
				}
			},
			server: {
				https: {
					key: fs.readFileSync('key'),
					cert: fs.readFileSync('cert')
				}
			}
		}
	}
};

export default config;
