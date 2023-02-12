import solid from 'solid-start/vite';
import { defineConfig } from 'vite';
import vercel from 'solid-start-vercel';

/**
 * Made for https://github.com/solidjs/solid-start/issues/739
 *
 * Editor and Lazy will be split into their own files at build time
 * Rollup will then be able to optomize out Editor as clientOnly will get optomized to a
 * basic function
 * ```javascript
 * function clientOnly(fn) {
 *   return props => props.fallback;
 * }
 * ```
 */

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
