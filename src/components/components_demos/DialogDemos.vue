<script setup lang="ts">
import Demo from '@/components/components_demos/Demo.vue';
import Dialog1demo from '@/components/components_demos/dialog/dialog1demo.vue';
import Dialog2demo from '@/components/components_demos/dialog/dialog2demo.vue';
import Dialog3demo from '@/components/components_demos/dialog/dialog3demo.vue';
import Dialog4demo from '@/components/components_demos/dialog/dialog4demo.vue';
import Dialog5demo from '@/components/components_demos/dialog/dialog5demo.vue';
import DialogDoc from '@/markdown/components/dialog.md'
</script>

<template>
  <h1>Dialog 组件示例 </h1>
  <Demo :component="Dialog1demo"></Demo>
  <Demo :component="Dialog2demo"></Demo>
  <Demo :component="Dialog3demo"></Demo>
  <Demo :component="Dialog4demo"></Demo>
  <Demo :component="Dialog5demo"></Demo>
  <DialogDoc></DialogDoc>
</template>

<script lang="ts">
export default {
  name: 'DialogDemo'
};
</script>
