import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://www.ctabustracker.com',
        changeOrigin: true,
        rewrite: (path) => {
          console.log("Proxying:", path); // Debug line
          return path.replace(/^\/api/, '');
        }
      }
    }
  }
});
