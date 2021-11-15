import {baseParse, ElementNode} from '@vue/compiler-core';
import fs from 'fs';

// 自定义块转换
// 可以告诉 vite 在遇到 vue 文件的时候如何处理自定义块 <example>
// 获取组件源码 Component.__sourceCode
// 获取组件标题 Component.__sourceCodeTitle 等价于 code
export function addSrcFromCustomBlock(customBlockName: string) {
  const regexp = new RegExp(`vue&type=${customBlockName}`);
  return {
    name: 'vueCustomBlockTransforms',
    transform: (code: string, id: string) => {
      if (!regexp.test(id)) {
        return;
      }
      const path = id
        .replace(`?vue&type=${customBlockName}&index=0&lang.${customBlockName}`,
          '');
      const fileString = fs.readFileSync(path).toString();
      const parsed = baseParse(fileString).children.find((n) => (n as ElementNode).tag === 'demo');
      const scriptTag = baseParse(fileString).children.find(n => (n as ElementNode).tag === 'script');
      // demo 标题
      const title = code; // @ts-ignore // const title = parsed.children[0].content;
      // 去掉demo标签和纯script后需要显示的代码主体
      const main = fileString.split(parsed.loc.source).join('').split(scriptTag.loc.source).join('').trim();

      return `export default function (Component) {
        Component.__sourceCode = ${JSON.stringify(main)}
        Component.__sourceCodeTitle = ${JSON.stringify(title)}
      }`.trim();
    },
  };
}
