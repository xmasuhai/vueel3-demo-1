import {baseParse} from '@vue/compiler-core';
import fs from 'fs';

// 自定义块转换
// 可以告诉 vite 在遇到 vue 文件的时候如何处理自定义块 <example>
// 获取组件源码 Component.__sourceCode
// 获取组件标题 Component.__sourceCodeTitle
export function vueCompAddSourceCodeTitleFromCustomBlock(customBlockName: string) {
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
      // @ts-ignore
      const parsed = baseParse(fileString).children.find(n => n.tag === 'demo');
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
}
