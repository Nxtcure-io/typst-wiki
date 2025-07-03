import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import typst from '@myriaddreamin/vite-plugin-typst';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), typst({ documents: ['content/**/*.typ]' })],
	server: {
  		allowedHosts: ['.tunnelmole.net']
	},	
})
