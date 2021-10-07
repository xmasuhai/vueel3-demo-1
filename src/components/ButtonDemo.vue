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
  <div class="container">
    <Button size="big" theme="link">大号链接按钮</Button>
    <Button size="normal" theme="link">普通链接按钮</Button>
    <Button size="small" theme="link">小号链接按钮</Button>
  </div>
  <div class="container">
    <Button size="big" theme="text">大号文字按钮</Button>
    <Button size="normal" theme="text">普通文字按钮</Button>
    <Button size="small" theme="text">小号文字按钮</Button>
  </div>
  <h2>示例三</h2>
  <div class="container">
    <Button level="primary">主要按钮</Button>
    <Button level="normal">普通按钮</Button>
    <Button level="danger">警告按钮</Button>
  </div>
  <div class="container">
    <Button level="primary" theme="link">主要链接按钮</Button>
    <Button level="normal" theme="link">普通链接按钮</Button>
    <Button level="danger" theme="link">警告链接按钮</Button>
  </div>
  <div class="container">
    <Button level="primary" theme="text">主要文字按钮</Button>
    <Button level="normal" theme="text">普通文字按钮</Button>
    <Button level="danger" theme="text">警告文字按钮</Button>
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
  margin: 10px auto;
}
</style>
