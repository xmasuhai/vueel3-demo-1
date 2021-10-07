<script setup lang="ts">
import Button from '@/lib/Button.vue';

</script>

<template>
  <h1>Button 示例</h1>
  <h2>示例一</h2>
  <div class="container">
    <Button>普通按钮</Button>
    <Button theme="button">普通按钮</Button>
    <Button theme="link">链接按钮</Button>
    <Button theme="text">文字按钮</Button>
  </div>
  <h2>示例二</h2>
  <div class="container">
    <Button size="big">大号按钮</Button>
    <Button size="normal">普通按钮</Button>
    <Button size="small">小号按钮</Button>
  </div>
  <h2>示例三</h2>
  <div class="container">
    <Button>普通按钮</Button>
  </div>
  <h2>示例四</h2>
  <div class="container">
    <Button>普通按钮</Button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ButtonDemo'
};
</script>

<style lang="scss" scoped>
h2,
h2 {
  margin: 10px auto;
}

.container {
  display: flex;
  align-items: center;
}
</style>
