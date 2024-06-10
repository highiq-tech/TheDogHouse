import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation'
import checker from 'vite-plugin-checker'
import million from 'million/compiler'
import tsconfigPaths from 'vite-tsconfig-paths'
import { dependencies } from './package.json'

export default defineConfig({
  plugins: [
    million.vite({ auto: true }),
    react(),
    federation({
      name: 'shell',
      filename: 'remoteEntry.js',
      remotes: {
        ui: 'http://localhost:5001/assets/remoteEntry.js',
        sharedState: 'http://localhost:5003/assets/remoteEntry.js',
      },
      shared: {
        ...dependencies,
        react: {
          requiredVersion: dependencies['react'],
        },
        'react-dom': {
          requiredVersion: dependencies['react-dom'],
        },
      },
    }),
    checker({
      eslint: { lintCommand: 'eslint "./src/**/*.{ts,tsx}"' },
      typescript: true,
    }),
    tsconfigPaths(),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})
