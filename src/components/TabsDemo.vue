<script setup lang="ts">
</script>

<template>
  <h1>示例一</h1>
  <Tabs>
    <TabItem title="导航1">内容1</TabItem>
    <TabItem title="导航2">内容2</TabItem>
    <TabItem title="导航3">内容3</TabItem>
  </Tabs>
</template>

<script lang="ts">
import Tabs from '@/lib/Tabs.vue';
import TabItem from '@/lib/TabItem.vue';

export default {
  name: 'TabsDemo',
  components: {
    Tabs,
    TabItem
  }
};
</script>

<style lang="scss" scoped>

</style>
