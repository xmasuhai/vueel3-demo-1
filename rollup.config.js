// 请先安装 rollup-plugin-esbuild rollup-plugin-vue rollup-plugin-scss sass rollup-plugin-terser
// rollup-plugin-esbuild
// rollup-plugin-vue
// rollup-plugin-scss
// sass
// rollup-plugin-terser
import path from 'path'
import dartSass from 'sass'
import vuePlugin from 'rollup-plugin-vue'
import esbuildPlugin from 'rollup-plugin-esbuild'
import scssPlugin from 'rollup-plugin-scss'
import bundleSize from 'rollup-plugin-filesize'
import alias from '@rollup/plugin-alias'
import {terser} from 'rollup-plugin-terser' // 压缩 js 代码，包括 ES6 代码压缩
import pkg from './package.json'

const pathResolve = p => path.resolve(__dirname, p)

export default {
  input: 'src/lib/index.ts',
  output: {
    // exports: 'vueel3',
    globals: {
      vue: 'Vue' // 告诉rollup全局变量Vue即是vue
    },
    name: 'vueel3-ui',
    file: 'dist/lib/vueel3.js',
    format: 'umd', // format: 'cjs',
    plugins: [terser()],
  },
  external: [Object.keys(pkg.dependencies)],
  plugins: [
    alias({
      '@': pathResolve('src')
    }),
    // .vue -> .js
    vuePlugin({
      include: /\.vue$/,
      // 把单文件组件中的样式，插入到html中的style标签
      css: true,
      // 把组件转换成 render 函数
      compileTemplate: true,
      template: {
        isProduction: !process.env.ROLLUP_WATCH,
        compilerOptions: {preserveWhitespace: false}
      }
    }),
    // .ts -> .js
    esbuildPlugin({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015'
    }),
    // .scss -> css
    scssPlugin({include: /\.scss$/, sass: dartSass}),
    bundleSize(),
  ]
}
