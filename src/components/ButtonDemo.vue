<script setup lang="ts">
import Button from '@/lib/Button.vue';

</script>

<template>
  <h1>Button 示例</h1>
  <h2>示例一</h2>
  <div>
    <Button theme="button">普通按钮</Button>
    <Button theme="link">链接按钮</Button>
    <Button theme="text">文字按钮</Button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ButtonDemo'
};
</script>

<style lang="scss" scoped>

</style>
