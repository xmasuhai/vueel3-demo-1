# Vueel3

> Vueel 3 UI 是一个基于`Vue 3.2` 和 `TypeScript` 的 UI 组件库

<img src="https://badge.fury.io/js/vue3-demo-ui-1.svg" alt="version">
<img src="https://img.shields.io/github/license/xmasuhai/vueel3-demo-1" alt="license">
<img src="https://img.shields.io/badge/vue-v3.2.0%2B-%23407fbc" alt="vue">

- 这是我在学习 Vue.js 过程中做的一个 UI 框架
  - 使用 `Composition API`
  - 使用 `script setup` 的语法糖
  - 使用 简洁的 `SCSS` 样式语法
  - 使用 严谨的 `TypeScript` 类型检查，并在开发时获得类型提示
- 使用 `Vite 2` 进行项目官网的构建
- 使用 `Vite 2` 进行组件库的打包，并发布到 npm

作者：徐某人

## 技术栈

- `Vue.js 3.x`
  - `vue-router`
- `TypeScript`
- `SCSS`
- `Vite 2`

## UI参考

- [Element UI]()
- [Ant Design Vue]()
- [Vant UI]()
- [iView UI]()
- [Bulma UI]()
- [Nut UI]()
- 饥人谷的 [Gulu UI](https://github.com/FrankFang/frank-test-1)
  - [轱辘 UI源码](https://github.com/FrankFang/gulu)
  - [Gulu UI for Vue 3](https://github.com/FrankFang/gulu-for-vue3)

---

## 运行步骤

1. 运行 `yarn install` 安装依赖
2. 运行 `yarn dev` 启动服务
3. 打开 [http://127.0.0.1:3000](http://127.0.0.1:3000)

## 官网构建步骤

1. 运行 `yarn install` 安装依赖
2. 运行 `yarn build`
3. 得到的 `dist` 目录就是官网源代码
4. 编辑并运行 `sh deploy.sh` 就可以手动上传到 `GitHub` 或码云等支持 `Pages` 功能的平台
5. 使用`GitHub Actions`推送时自动更新官网
6. 使用`GitHub Actions`推送时自动发布组件库到`npm`

## 组件库文件打包步骤

1. 运行 `yarn install` 安装依赖
2. 运行 `yarn build:lib`
3. 得到的 `dist/lib` 目录就是编译后的库文件所在目录

## 变更记录

- [X] 添加 图标组件
- [X] 添加 按钮组件
- [X] 添加 开关组件
- [X] 添加 标签栏组件
- [X] 添加 弹出框组件
- [x] 添加 手风琴组件
- [ ] 添加 输入框组件
- [ ] 添加 栅栏组件
- [ ] 添加 布局组件
- [ ] 添加 浮动消息组件

## 联系方式

- `xmasuhai@163.com`

---

---
