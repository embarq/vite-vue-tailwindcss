import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import loadVersion from 'vite-plugin-package-version'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    loadVersion(),
  ],
  resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		}
	},
  build: {
		target: 'es2020',
		manifest: true,
	}
})
