# 开始使用

请先[安装](#/docs/install)本组件库。

然后在你的代码中写入下面的代码：

```
import * as vueel3 from 'vue3-demo-ui-1'
import 'vue3-demo-ui-1/dist/lib/style.css'
const {VlButton, VlTabs, VlSwitch, VlDialog, useDialog} = vueel3
```

就可以使用我提供的组件了。

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
const {VlButton, VlTabs, VlSwitch, VlDialog, useDialog} = vueel3

export default {
  components: {VlButton, VlTabs, VlSwitch, VlDialog, useDialog}
}
</script>
```
