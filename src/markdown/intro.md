# 介绍

> Vueel3 UI 是一款基于 **`Vue 3`** 和 **`TypeScript`** 的 UI 组件库。

- 这款组件库是为了总结自己学习最新 Vue 3.2 的技术经验
- 包括现在看到的这个展示组件的官网，也都是全程手写
- 涵盖了Icon、Button、Switch、Dialog等常见组件
- 在制作组件的过程中，使我了解了`setup`、`ref`、`watchEffect`等`Composition API`的用法
- 模块化、组件化的源代码简洁明了，易于阅读
- 官方文档展示了组件的用法，可在线查看示例代码，并支持PC和手机浏览
- 官方展示使用了 `github` 的 `gh-pages` 功能，并实现了自动化部署脚本。

## Vueel3 UI 的技术栈

- 使用 `Composition API`
- 使用 `script setup` 的语法糖
- 使用 简洁的 `SCSS` 样式语法
- 使用 严谨的 `TypeScript` 类型检查，并在开发时获得类型提示
- 使用 `Vite2.0`
  - 进行项目展示文档的构建
  - 进行组件库的打包，并发布到 [npm/vue3-demo-ui-1](https://www.npmjs.com/package/vue3-demo-ui-1)

强烈不建议将此 UI 库用于生产环境。

但如果是抱着 学习 ***`vue3.2`*** 最新语法的目的来的，那么这个库还是值得一看的。

源代码放在了 [`https://github.com/xmasuhai/vueel3-demo-1`](https://github.com/xmasuhai/vueel3-demo-1)

历史提交信息非常规范，可以按提交的顺序逐个查看；也可以直接查看每个组件的源代码和示例，运行方法见 [README.md](#/docs/readme)。

## 展示网站时使用的第三方库：

- 事件总线`mitt`
- 代码美化`prismjs`
- GitHub MD文档 样式`github-markdown-css`

下一节：[安装](#/docs/install)
