<demo>常规用法</demo>
<script lang="ts">
export default {
  name: 'Button1Demo',
  __sourceCode: '',
  __sourceCodeTitle: ''
};
</script>

<template>
  <VueButton>默认按钮</VueButton>
  <VueButton theme="button">普通按钮</VueButton>
  <VueButton theme="link">链接按钮</VueButton>
  <VueButton theme="text">文字按钮</VueButton>
</template>

<script setup lang="ts">
import VueButton from '@/lib/Button.vue';
</script>
