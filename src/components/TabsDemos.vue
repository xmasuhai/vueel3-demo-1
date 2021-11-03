<script setup lang="ts">
import Demo from '@/components/Demo.vue';
import Tab1demo from '@/components/tab/tab1demo.vue';
import TabsDoc from '@/markdown/components/tabs.md'
</script>

<template>
  <div>
    <h1>Tab 组件示例 </h1>
    <Demo :component="Tab1demo"></Demo>
  </div>
  <TabsDoc></TabsDoc>
</template>

<script lang="ts">

export default {
  name: 'TabsDemo'
};
</script>
