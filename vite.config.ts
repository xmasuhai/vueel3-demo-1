import vue from '@vitejs/plugin-vue';
import {defineConfig} from 'vite';
import Markdown from 'vite-plugin-md';
import ViteComponents from 'vite-plugin-components';

// const path = require('path'); path.resolve(...)
const {resolve} = require('path');
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown(),
    ViteComponents({
      dirs: ['src/markdown'],
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],

      // allow auto import and register components used in markdown
      customLoaderMatcher: path => path.endsWith('.md'),
    })
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve('./src')
      },
      {find: /^~@/, replacement: resolve(__dirname, 'src')}
    ]
  }

});
