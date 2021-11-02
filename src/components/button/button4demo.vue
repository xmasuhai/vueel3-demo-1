<demo>不同尺寸按钮</demo>
<script lang="ts">
export default {
  name: 'Button4Demo',
  __sourceCode: '',
  __sourceCodeTitle: ''
};
</script>

<template>
  <VueButton size="big">大号按钮</VueButton>
  <VueButton size="medium">普通按钮</VueButton>
  <VueButton size="small">小号按钮</VueButton>
  <br/>
  <VueButton size="big" theme="link">大号链接按钮</VueButton>
  <VueButton size="medium" theme="link">普通链接按钮</VueButton>
  <VueButton size="small" theme="link">小号链接按钮</VueButton>
  <br/>
  <VueButton size="big" theme="text">大号文字按钮</VueButton>
  <VueButton size="medium" theme="text">普通文字按钮</VueButton>
  <VueButton size="small" theme="text">小号文字按钮</VueButton>
</template>

<script setup lang="ts">
import VueButton from '@/lib/Button.vue';
</script>
