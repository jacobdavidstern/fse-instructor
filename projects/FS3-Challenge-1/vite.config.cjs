// vite.config.cjs
module.exports = {
  server: {
    proxy: {
      '/api/jamendo': {
        target: `http://localhost:${process.env.PORT || 3001}`,
        changeOrigin: true,
      },
    },
  },
};
