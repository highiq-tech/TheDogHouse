import { defineConfig } from 'vite'
import type { PluginOption } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation'
import checker from 'vite-plugin-checker'
import million from 'million/compiler'
import { visualizer } from 'rollup-plugin-visualizer'
import type { VitePWAOptions } from 'vite-plugin-pwa'
import { VitePWA } from 'vite-plugin-pwa'
import tsconfigPaths from 'vite-tsconfig-paths'

const pwaOptions: Partial<VitePWAOptions> = {
  registerType: 'autoUpdate',
  manifest: {
    short_name: 'the-dog-house',
    name: 'The Dog House',
    lang: 'en',
    start_url: '/',
    background_color: '#FFFFFF',
    theme_color: '#FFFFFF',
    dir: 'ltr',
    display: 'standalone',
    prefer_related_applications: false,
    icons: [
      {
        src: 'favicon.svg',
        purpose: 'any',
        sizes: '48x48 72x72 96x96 128x128 256x256',
      },
    ],
  },
}

export default defineConfig({
  plugins: [
    million.vite({ auto: true }),
    react(),
    federation({
      name: 'shell',
      filename: 'remoteEntry.js',
      exposes: {
        './eventBus': './src/lib/eventBus',
      },
      remotes: {
        ui: 'http://localhost:5001/assets/remoteEntry.js',
        products: 'http://localhost:5002/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
    checker({
      eslint: { lintCommand: 'eslint "./src/**/*.{ts,tsx}"' },
      typescript: true,
    }),
    tsconfigPaths(),
    visualizer({ template: 'sunburst' }) as unknown as PluginOption,
    VitePWA(pwaOptions),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})
