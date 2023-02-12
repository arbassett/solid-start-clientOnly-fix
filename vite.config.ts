import solid from 'solid-start/vite';
import { defineConfig } from 'vite';
import vercel from 'solid-start-vercel';

export default defineConfig({
  plugins: [
    solid({
      ssr: true,
      // adapter: vercel({edge: false}) // uncomment this to try out the vercel patch
    }),
  ],
  ssr: {
    external: ['monaco-editor'],
  },
});
