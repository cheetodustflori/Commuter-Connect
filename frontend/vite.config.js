import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://www.ctabustracker.com',
        changeOrigin: true,
        rewrite: (path) => {
          console.log("Proxying:", path); 
          return path.replace(/^\/api/, '');
        }
      },
      '/api2': {
        target: 'http://www.transitchicago.com',
        changeOrigin: true,
      rewrite: (path) => {
        console.log("Proxying:", path); 
        return path.replace(/^\/api/, '');
      }
      }
    }
  }
});
