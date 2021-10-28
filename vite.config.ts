import vue from '@vitejs/plugin-vue';
import {defineConfig/*, PluginOption, UserConfig*/} from 'vite';
import Markdown from 'vite-plugin-md';
import ViteComponents/*, {Options}*/ from 'vite-plugin-components';
// const path = require('path'); path.resolve(...)
// https://vitejs.dev/config/
const {resolve} = require('path');
// vueCustomBlockTransforms
import {vueCompAddSourceCodeTitleFromCustomBlock} from './plugins/vueCompAddSourceCodeTitleFromCustomBlock';

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
      customLoaderMatcher: (path: string) => path.endsWith('.md'),
    }),
    vueCompAddSourceCodeTitleFromCustomBlock('demo')
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve('./src')
      },
      {find: /^~@/, replacement: resolve(__dirname, 'src')},
    ]
  },

});
