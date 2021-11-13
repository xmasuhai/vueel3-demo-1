<demo>常规用法</demo>
<script lang="ts">
export default {
  name: 'Tab2Demo',
  __sourceCode: '',
  __sourceCodeTitle: ''
};

</script>

<template>
  <VlTabs v-model:selected="defaultTab">
    <VlTabItem title="导航1">内容1</VlTabItem>
    <VlTabItem title="导航22">内容22</VlTabItem>
    <VlTabItem title="导航333">内容333</VlTabItem>
  </VlTabs>
</template>

<script setup lang="ts">
import VlTabs from '@/lib/VlTabs.vue';
import VlTabItem from '@/lib/VlTabItem.vue';
import {ref} from 'vue';

const defaultTab = ref('导航1');

</script>
