// @ts-nocheck
import fs from 'fs';
import marked from 'marked';
import path from 'path';

const mdToJs = str => {
  const content = JSON.stringify(marked(str));
  return `export default ${content}`;
};

export default function md() {
  return {
    name: 'vite-plugin-md',
    enforce: 'pre',
    configureServer: [ // 用于开发
      async ({app}) => {
        app.use(async (ctx, next) => { // koa
          if (ctx.path.endsWith('.md')) {
            ctx.type = 'js';
            const filePath = path.join(process.cwd(), ctx.path);
            ctx.body = mdToJs(fs.readFileSync(filePath).toString());
          } else {
            await next();
          }
        });
      },
    ],
    transforms: [{  // 用于 rollup // 插件
      test: context => context.path.endsWith('.md'),
      transform: ({code}) => mdToJs(code)
    }]
  };
}
