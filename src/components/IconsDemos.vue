<script setup lang="ts">
import Demo from '@/components/Demo.vue';
import Icon1demo from '@/components/icon/icon1demo.vue';

</script>

<template>
  <h1>Icon 组件示例 </h1>
  <Demo :component="Icon1demo"></Demo>
</template>

<script lang="ts">
export default {
  name: 'IconsDemo'
};
</script>
