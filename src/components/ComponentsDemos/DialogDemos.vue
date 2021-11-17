<script setup lang="ts">
import Demo from '@/components/ComponentsDemos/Demo.vue';
import Dialog1demo from '@/components/ComponentsDemos/dialog/dialog1demo.vue';
import Dialog2demo from '@/components/ComponentsDemos/dialog/dialog2demo.vue';
import Dialog3demo from '@/components/ComponentsDemos/dialog/dialog3demo.vue';
import Dialog4demo from '@/components/ComponentsDemos/dialog/dialog4demo.vue';
import Dialog5demo from '@/components/ComponentsDemos/dialog/dialog5demo.vue';
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
