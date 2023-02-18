import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "./src/styles/main";`
			}
		}
	},
	//settings for proxying requests during development
	server: {
    proxy: {
      '/api': {

				// // For development against local api:
				// target:'http://localhost:5000',

				// For development against live api:
				target:'https://api.noonalu.app',
				// Required additional setting to avoid cors 
				changeOrigin:true,

				// remove api from path of request
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
		}
		}
})
