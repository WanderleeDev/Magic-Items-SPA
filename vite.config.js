import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '@images': '/src/assets/images',
      '@components': '/src/assets/js/components',
      '@scss': '/src/assets/scss/abstract'
    }
  },
  server: {
    open: true
  }
})
