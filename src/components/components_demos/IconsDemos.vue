<script setup lang="ts">
import Demo from '@/components/components_demos/Demo.vue';
import Icon1demo from '@/components/components_demos/icon/icon1demo.vue';
import Icon2demo from '@/components/components_demos/icon/icon2demo.vue';
import Icon3demo from '@/components/components_demos/icon/icon3demo.vue';
import IconDoc from '@/markdown/components/icon.md';
</script>

<template>
  <h1>Icon 组件示例 </h1>
  <Demo :component="Icon1demo"></Demo>
  <Demo :component="Icon2demo"></Demo>
  <Demo :component="Icon3demo"></Demo>
  <IconDoc></IconDoc>
</template>

<script lang="ts">
export default {
  name: 'IconsDemos'
};
</script>
