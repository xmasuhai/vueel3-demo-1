import {terser} from 'rollup-plugin-terser'; // 压缩 js 代码，包括 ES6 代码压缩
import esbuildPlugin from 'rollup-plugin-esbuild';
import bundleSize from 'rollup-plugin-filesize';
import {basicConfig} from './vite-base.config';

const {resolve} = require('path');
const libConfig = Object.assign(basicConfig, {
  build: {
    outDir: 'dist/lib',
    lib: {
      entry: resolve(__dirname, 'src/lib/index.ts'),
      name: 'vueel3-ui',
      formats: [/*'es', */'umd'],
      fileName: (/*format*/) => `vueel3-ui.js`  // `vueel3-ui.${format}.js`
    },
    minify: 'terser', // 'terser' 相对较慢，但大多数情况下构建后的文件体积更小。// minify: 'esbuild','esbuild' 最小化混淆更快但构建后的文件相对更大。
    terserOptions: {
      compress: {
        drop_console: true, // 生产环境去除console
        drop_debugger: true // 生产环境去除debugger
      }
    },
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
        /*
        // .vue -> .js
        vuePlugin({
          include: /\.vue$/
        }),
        */
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
});

export default libConfig;
