<demo>不同形状</demo>
<script lang="ts">
export default {
  name: 'Button2Demo',
  __sourceCode: '',
  __sourceCodeTitle: ''
};
</script>

<template>
  <VueButton>默认矩形</VueButton>
  <VueButton shape="rect">矩形按钮</VueButton>
  <VueButton shape="circle">圆</VueButton>
  <VueButton shape="capsule">腰圆按钮</VueButton>
</template>

<script setup lang="ts">
import VueButton from '@/lib/VlButton.vue';
</script>
