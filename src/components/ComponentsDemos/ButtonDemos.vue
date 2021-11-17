<script setup lang="ts">
import Demo from '@/components/ComponentsDemos/Demo.vue';
import Button1demo from '@/components/ComponentsDemos/button/button1demo.vue';
import Button2demo from '@/components/ComponentsDemos/button/button2demo.vue';
import Button3demo from '@/components/ComponentsDemos/button/button3demo.vue';
import Button4demo from '@/components/ComponentsDemos/button/button4demo.vue';
import Button5demo from '@/components/ComponentsDemos/button/button5demo.vue';
import Button6demo from '@/components/ComponentsDemos/button/button6demo.vue';
import Button7demo from '@/components/ComponentsDemos/button/button7demo.vue';
import ButtonDoc from '@/markdown/components/button.md'
</script>

<template>
  <h1>Button 组件示例 </h1>
  <Demo :component="Button1demo"></Demo>
  <Demo :component="Button2demo"></Demo>
  <Demo :component="Button3demo"></Demo>
  <Demo :component="Button4demo"></Demo>
  <Demo :component="Button5demo"></Demo>
  <Demo :component="Button6demo"></Demo>
  <Demo :component="Button7demo"></Demo>
  <ButtonDoc></ButtonDoc>
</template>

<script lang="ts">
export default {
  name: 'ButtonDemo'
};
</script>

<style lang="scss" scoped>
:deep(.vue-button) {
  margin: 5px;
}
</style>
