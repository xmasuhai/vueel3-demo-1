import vue from '@vitejs/plugin-vue';
import {defineConfig/*, PluginOption, UserConfig*/} from 'vite'; // const { defineConfig } = require('vite')
import Markdown from 'vite-plugin-md';
import ViteComponents/*, {Options}*/ from 'vite-plugin-components';
// vueCustomBlockTransforms
import {vueCompAddSourceCodeTitleFromCustomBlock} from './plugins/vueCompAddSourceCodeTitleFromCustomBlock';
import {terser} from 'rollup-plugin-terser' // 压缩 js 代码，包括 ES6 代码压缩
import esbuildPlugin from 'rollup-plugin-esbuild';
import bundleSize from 'rollup-plugin-filesize';

/*// ES6
import path from 'path';
import fs from 'fs';
import marked from 'marked';*/
// const path = require('path'); path.resolve(...)
// https://vitejs.dev/config/
const {resolve} = require('path');

export default defineConfig({
  base: './',
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
  /*
  build: {
    outDir: 'dist/lib',
    lib: {
      entry: resolve(__dirname, 'src/lib/index.ts'),
      name: 'vueel3-ui',
      formats: [/!*'es', *!/'umd'],
      fileName: (/!*format*!/) => `vueel3-ui.js`  // `vueel3-ui.${format}.js`
    },
    minify: 'esbuild',
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        },
        name: 'vueel3',
        // file: 'dist/lib/vueel3.js',
        format: 'umd',
        plugins: [terser()],
      },
      plugins: [
        /!*
        // .vue -> .js
        vuePlugin({
          include: /\.vue$/
        }),
        *!/
        // .ts -> .js
        esbuildPlugin({
          include: /\.[jt]s$/,
          minify: process.env.NODE_ENV === 'production',
          target: 'es2015'
        }),
        // .scss -> css
        // scssPlugin({include: /\.scss$/, sass: dartSass}),
        bundleSize(),
      ]

    }
  }
  */
});
