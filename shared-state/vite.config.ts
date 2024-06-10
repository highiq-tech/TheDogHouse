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
      name: 'shared-state',
      filename: 'remoteEntry.js',
      exposes: {
        './onEmit': './src/lib/event-emitter',
        './pubSub': './src/lib/pub-sub',
        './countSignal': './src/hooks/countSignal',
      },
      remotes: {},
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
