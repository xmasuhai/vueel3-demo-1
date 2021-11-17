<demo>禁用状态按钮</demo>
<script lang="ts">
export default {
  name: 'Button6Demo',
  __sourceCode: '',
  __sourceCodeTitle: ''
};
</script>

<template>
  <VueButton disabled>禁用按钮</VueButton>
  <VueButton :disabled="true">绑定disabled属性禁用按钮</VueButton>
  <VueButton theme="link" disabled>禁用链接按钮</VueButton>
  <VueButton theme="text" disabled>禁用文字按钮</VueButton>
</template>

<script setup lang="ts">
import VueButton from '@/lib/VlButton.vue';
</script>
