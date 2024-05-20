import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation'
import checker from 'vite-plugin-checker'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './Content': './src/components/Content',
      },
      remotes: {
        shell: 'http://localhost:5000/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
    checker({
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
      typescript: true,
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})
