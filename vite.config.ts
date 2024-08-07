import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ mode }) => ({
	plugins: [sveltekit()],
	optimizeDeps: {
		include: [
			'lodash.get',
			'lodash.isequal',
			'lodash.clonedeep',
			'@bytemd/plugin-gfm',
			'@bytemd/plugin-highlight-ssr'
		],
		exclude: ['bytemd']
	},
	resolve: {
		alias: {
			$fonts: mode === 'production' ? resolve('./static/fonts') : '../fonts'
		}
	}
}));
