<demo>加载状态切换</demo>
<script lang="ts">
export default {
  name: 'Button7Demo',
  __sourceCode: '',
  __sourceCodeTitle: ''
};
</script>

<template>
  <VueButton :isLoading="true">加载中</VueButton>
  <VueButton :isLoading="true">绑定loading属性加载中按钮</VueButton>
  <VueButton theme="link" :isLoading="true">加载中链接按钮</VueButton>
  <VueButton theme="text" :isLoading="true">加载中文字按钮</VueButton>
  <VueButton>加载完毕</VueButton>
</template>

<script setup lang="ts">
import VueButton from '@/lib/Button.vue';
</script>
