<script setup lang="ts">
import Demo from '@/components/components_demos/Demo.vue';
import Button1demo from '@/components/components_demos/button/button1demo.vue';
import Button2demo from '@/components/components_demos/button/button2demo.vue';
import Button3demo from '@/components/components_demos/button/button3demo.vue';
import Button4demo from '@/components/components_demos/button/button4demo.vue';
import Button5demo from '@/components/components_demos/button/button5demo.vue';
import Button6demo from '@/components/components_demos/button/button6demo.vue';
import Button7demo from '@/components/components_demos/button/button7demo.vue';
import ButtonIcon from '@/markdown/components/button-icon.md';
import ButtonLoading from '@/markdown/components/button-loading.md';
import ButtonDisabled from '@/markdown/components/button-disabled.md';
import ButtonAttrs from '@/markdown/components/button-attrs.md';
</script>

<template>
  <h1>Button 组件示例 </h1>
  <Demo :component="Button1demo"></Demo>
  <Demo :component="Button2demo"></Demo>
  <Demo :component="Button3demo"><ButtonIcon></ButtonIcon></Demo>
  <Demo :component="Button4demo"></Demo>
  <Demo :component="Button5demo"></Demo>
  <Demo :component="Button6demo"><ButtonDisabled></ButtonDisabled></Demo>
  <Demo :component="Button7demo"><ButtonLoading></ButtonLoading></Demo>
  <ButtonAttrs></ButtonAttrs>
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
