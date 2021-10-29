<demo>不同等级层次的按钮</demo>
<script lang="ts">
export default {
  name: 'Button1Demo',
  __sourceCode: '',
  __sourceCodeTitle: ''
};
</script>

<template>
  <VueButton level="primary">主要按钮</VueButton>
  <VueButton level="normal">普通按钮</VueButton>
  <VueButton level="danger">警告按钮</VueButton>
  <br/>
  <VueButton level="primary" theme="link">主要链接按钮</VueButton>
  <VueButton level="normal" theme="link">普通链接按钮</VueButton>
  <VueButton level="danger" theme="link">警告链接按钮</VueButton>
  <br/>
  <VueButton level="primary" theme="text">主要文字按钮</VueButton>
  <VueButton level="normal" theme="text">普通文字按钮</VueButton>
  <VueButton level="danger" theme="text">警告文字按钮</VueButton>
</template>

<script setup lang="ts">
import VueButton from '@/lib/Button.vue';
</script>
