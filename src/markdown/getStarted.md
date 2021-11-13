# 开始使用

请先[安装](#/docs/install)本组件库。

然后在你的代码中写入下面的代码：

```
import * as vueel3 from 'vue3-demo-ui-1'
const {Button, Tabs, Switch, Dialog, useDialog} = vueel3
```

就可以使用我提供的组件了。

## Vue 单文件组件 使用时不必使用 ts 语法

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>

<script>
import * as vueel3 from 'vue3-demo-ui-1'
const {Button, Tabs, Switch, Dialog, useDialog} = vueel3

export default {
  components: {Button, Tabs, Switch, Dialog, useDialog}
}
</script>
```
