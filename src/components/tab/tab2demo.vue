<demo>常规用法</demo>
<script lang="ts">
export default {
  name: 'Tab2Demo',
  __sourceCode: '',
  __sourceCodeTitle: ''
};

</script>

<template>
  <Tabs v-model:selected="defaultTab">
    <TabItem title="导航1">内容1</TabItem>
    <TabItem title="导航22">内容22</TabItem>
    <TabItem title="导航333">内容333</TabItem>
  </Tabs>
</template>

<script setup lang="ts">
import Tabs from '@/lib/Tabs.vue';
import TabItem from '@/lib/TabItem.vue';
import {ref} from 'vue';

const defaultTab = ref('导航1');

</script>
