import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";
import checker from "vite-plugin-checker";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "ui",
      filename: "remoteEntry.js",
      exposes: {
        "./Header": "./src/components/Header",
        "./Footer": "./src/components/Footer",
      },
      remotes: {},
      shared: ["react", "react-dom"],
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
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
