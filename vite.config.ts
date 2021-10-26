import vue from '@vitejs/plugin-vue';
import {defineConfig/*, PluginOption, UserConfig*/} from 'vite';
import Markdown from 'vite-plugin-md';
import ViteComponents/*, {Options}*/ from 'vite-plugin-components';
import fs from 'fs';
import {baseParse} from '@vue/compiler-core';
import {Plugin} from 'vite';

// const path = require('path'); path.resolve(...)
const {resolve} = require('path');
// https://vitejs.dev/config/

// 自定义块转换
// 使用 vueCustomBlockTransforms 选项
// 可以告诉 vite 在遇到 vue 文件的时候如何处理自定义块 <demo>
const vueCustomBlockTransformsPlugin = (options: any): Plugin => {
  const {path} = options;
  return {
    name: 'vueCustomBlockTransforms',
    transform: (code: string, id: string) => {
      if (!/vue&type=demo/.test(id)) {
        return;
      }
      const file = fs.readFileSync(path).toString();
      // @ts-ignore
      const parsed = baseParse(file).children.find(n => n.tag === 'demo');
      // demo 标题
      // @ts-ignore
      const title = parsed.children[0].content;
      // 代码主体
      // @ts-ignore
      const main = fileString.split(parsed.loc.source).join('').trim();

      return `export default function (Component) {
        Component.__sourceCode = ${JSON.stringify(main)}
        Component.__sourceCodeTitle = ${JSON.stringify(title)}
      }`.trim();
    },
  };
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
      customLoaderMatcher: (path: string) => path.endsWith('.md'),
    }),
// @ts-ignore
    vueCustomBlockTransformsPlugin()
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
