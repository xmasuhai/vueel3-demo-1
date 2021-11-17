<script setup lang="ts">
import Demo from '@/components/ComponentsDemos/Demo.vue';
import collapse1demo from '@/components/ComponentsDemos/collapse/collapse1demo.vue';
import collapse2demo from '@/components/ComponentsDemos/collapse/collapse2demo.vue';
import collapse3demo from '@/components/ComponentsDemos/collapse/collapse3demo.vue';
import collapse4demo from '@/components/ComponentsDemos/collapse/collapse4demo.vue';
import CollapseDoc from '@/markdown/components/collapse.md';
</script>

<template>
  <div>
    <h1>Collapse 组件示例</h1>
    <Demo :component="collapse1demo"></Demo>
    <Demo :component="collapse2demo"></Demo>
    <Demo :component="collapse3demo"></Demo>
    <Demo :component="collapse4demo"></Demo>
  </div>
  <CollapseDoc></CollapseDoc>
</template>

<script lang="ts">
export default {
  name: 'CollapseDemo'
};
</script>
