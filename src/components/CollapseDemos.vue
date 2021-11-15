<script setup lang="ts">
import Demo from '@/components/Demo.vue';
import collapse1demo from '@/components/collapse/collapse1demo.vue';
import CollapseDoc from '@/markdown/components/collapse.md';
</script>

<template>
  <div>
    <h1>Collapse 组件示例 </h1>
    <Demo :component="collapse1demo"></Demo>
  </div>
  <CollapseDoc></CollapseDoc>
</template>

<script lang="ts">
export default {
  name: 'CollapseDemo'
};
</script>
