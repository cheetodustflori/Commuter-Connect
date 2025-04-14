import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://www.ctabustracker.com', // 🚌 BUS
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/api2': {
        target: 'http://lapi.transitchicago.com', // 🚇 TRAIN
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api2/, ''),
      }
    }
  }
});
