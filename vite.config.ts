import vue from '@vitejs/plugin-vue';
import {defineConfig} from 'vite';
import Markdown from 'vite-plugin-md';

// const path = require('path'); path.resolve(...)
const {resolve} = require('path');
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown()
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
