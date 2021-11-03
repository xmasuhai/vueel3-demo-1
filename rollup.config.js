// 请先安装 rollup-plugin-esbuild rollup-plugin-vue rollup-plugin-scss sass rollup-plugin-terser
// rollup-plugin-esbuild
// rollup-plugin-vue
// rollup-plugin-scss
// sass
// rollup-plugin-terser
import esbuild from 'rollup-plugin-esbuild'
import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import sass from 'sass'
import {terser} from 'rollup-plugin-terser'
import alias from '@rollup/plugin-alias'

export default {
  input: 'src/lib/index.ts',
  output: {
    globals: {
      vue: 'vue'
    },
    name: 'vueel3-ui',
    file: 'dist/lib/vueel3.js',
    format: 'umd', // format: 'cjs',
    plugins: [terser()],
    // dir: 'output',
  },
  plugins: [
    alias({
      entries: [
        {find: '@', replacement: './src'}
      ]
    }),
    scss({include: /\.scss$/, runtime: require("sass")}),
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015'
    }),
    vue({
      include: /\.vue$/,
    })
  ]
}
