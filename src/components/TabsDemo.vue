<script setup lang="ts">
import {ref} from 'vue';

const defaultTab = ref('导航1');

</script>

<template>
  <div>
    <h1>示例一</h1>
    <Tabs v-model:selected="defaultTab">
      <TabItem title="导航1">内容1</TabItem>
      <TabItem title="导航22">内容22</TabItem>
      <TabItem title="导航333">内容333</TabItem>
    </Tabs>
  </div>
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
