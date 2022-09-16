import { defineConfig } from 'vite';
import pluginReact from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
	// This changes the out put dir from dist to build
	// comment this out if that isn't relevant for your project
	build: {
		outDir: 'build',
		emptyOutDir: true,
	},
	server: {
		host: 'localhost',
		port: 3000,
		open: true,
	},
	plugins: [
		pluginReact(),
		svgrPlugin({
			svgrOptions: {
				icon: true,
			},
		}),
	],
});
