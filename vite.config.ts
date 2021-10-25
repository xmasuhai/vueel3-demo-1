import vue from '@vitejs/plugin-vue';
import {defineConfig} from 'vite';
import Markdown from 'vite-plugin-md';
import ViteComponents from 'vite-plugin-components';
import fs from 'fs';
import {baseParse} from '@vue/compiler-core';

// const path = require('path'); path.resolve(...)
const {resolve} = require('path');
// https://vitejs.dev/config/

// 自定义块转换
const vueCustomBlockTransforms = {
  name: 'vueCustomBlockTransforms',
  // @ts-ignore
  demo: (options) => {
    const {code, path} = options;
    const file = fs.readFileSync(path).toString();
    // @ts-ignore
    const parsed = baseParse(file).children.find(n => n.tag === 'demo');
    // demo 标题
    // @ts-ignore
    const title = parsed.children[0].content;
    // 代码主体
    // @ts-ignore
    const main = file.split(parsed.loc.source).join('').trim();
    return `export default function (Component) {
        Component.__sourceCode = ${
      JSON.stringify(main)
    }
        Component.__sourceCodeTitle = ${JSON.stringify(title)}
      }`.trim();
  }
};

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
    }),
    vueCustomBlockTransforms
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
