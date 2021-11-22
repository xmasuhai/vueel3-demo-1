# 开始使用

请先[安装](#/docs/install)本组件库。

引入必要资源，在代码中写入下面的代码：

```
import * as vueel3 from 'vue3-demo-ui-1'
import 'vue3-demo-ui-1/dist/lib/style.css'
const {VlButton, } = vueel3
```

注册组件

```
export default {
  name: "ComponentName",
  components: {
    VlButton,
  },
}
```

使用

```
<template>
  <div>
    <VlButton>默认按钮</VlButton>
  </div>
</template>
```

效果

<script setup lang="ts">
import VueButton from '@/lib/VlButton.vue';
</script>

<VueButton>默认按钮</VueButton>

## Vue 单文件组件 使用时不必使用 ts 语法

代码示例：

```
<template>
  <div>
    <VlButton>按钮</VlButton>
  </div>
</template>

<script>
import * as vueel3 from 'vue3-demo-ui-1'
import 'vue3-demo-ui-1/dist/lib/style.css'
const {VlButton, VlTabs, VlSwitch, VlDialog, useDialog, VlCollapse, VlCollapseItem} = vueel3

export default {
  components: {VlButton, VlTabs, VlSwitch, VlDialog, useDialog, VlCollapse, VlCollapseItem}
}
</script>
```
