<script setup lang="ts">
import Demo from '@/components/components_demos/Demo.vue';
import Tab1demo from '@/components/components_demos/tab/tab1demo.vue';
import Tab2demo from '@/components/components_demos/tab/tab2demo.vue';
import Tab3demo from '@/components/components_demos/tab/tab3demo.vue';
import TabsDoc from '@/markdown/components/tabs.md'
</script>

<template>
  <div>
    <h1>Tab 组件示例 </h1>
    <Demo :component="Tab1demo"></Demo>
    <Demo :component="Tab2demo"></Demo>
    <Demo :component="Tab3demo"></Demo>
  </div>
  <TabsDoc></TabsDoc>
</template>

<script lang="ts">

export default {
  name: 'TabsDemo'
};
</script>
