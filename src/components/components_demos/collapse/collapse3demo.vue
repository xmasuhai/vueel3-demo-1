<demo>禁用项</demo>
<script lang="ts">
export default {
  name: 'Collapse3Demo',
  __sourceCode: '',
  __sourceCodeTitle: ''
};
</script>

<template>
  <VlCollapse>
    <VlCollapseItem title="标题1" isDisabled="true">内容1</VlCollapseItem>
    <VlCollapseItem title="标题2" isDisabled>内容2</VlCollapseItem>
    <VlCollapseItem title="标题3" isDisabled="true">内容3</VlCollapseItem>
  </VlCollapse>
</template>

<script lang="ts" setup>
import VlCollapse from '@/lib/VlCollapse.vue';
import VlCollapseItem from '@/lib/VlCollapseItem.vue';
</script>
