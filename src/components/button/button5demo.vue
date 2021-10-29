<demo>加载状态切换</demo>
<script lang="ts">
export default {
  name: 'Button1Demo',
  __sourceCode: '',
  __sourceCodeTitle: ''
};
</script>

<template>
  <VueButton :loading="true">加载中</VueButton>
  <VueButton :loading="true">绑定loading属性加载中按钮</VueButton>
  <VueButton theme="link" :loading="true">加载中链接按钮</VueButton>
  <VueButton theme="text" :loading="true">加载中文字按钮</VueButton>
  <VueButton>加载完毕</VueButton>
</template>

<script setup lang="ts">
import VueButton from '@/lib/Button.vue';
</script>
