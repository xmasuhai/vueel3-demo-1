import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';

// const path = require('path'); path.resolve(...)
const {resolve} = require('path');
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [vue()],
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
