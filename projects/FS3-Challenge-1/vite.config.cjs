// vite.config.cjs
const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');

module.exports = defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Add a hash to every file for zero caching
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash][extname]',
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: `http://localhost:3000`,
        changeOrigin: true,
      },
    },
  },
});
