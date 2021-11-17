<demo>常规用法： 展示图标</demo>
<script lang="ts">
export default {
  name: 'Tab1Demo',
  __sourceCode: '',
  __sourceCodeTitle: '',
};

</script>

<template>
  <div style="display: inline-flex;margin: 20px;">
    <VlIcon iconName="search" :scale="3"></VlIcon>
  </div>
  <div style="display: inline-flex;margin: 20px;">
    <VlIcon iconName="vue" :scale="3"></VlIcon>
  </div>
  <div style="display: inline-flex;margin: 20px;">
    <VlIcon iconName="vite" :scale="3"></VlIcon>
  </div>
  <div style="display: inline-flex;margin: 20px;">
    <VlIcon iconName="ts" :scale="3"></VlIcon>
  </div>
  <div style="display: inline-flex;margin: 20px;">
    <VlIcon iconName="github" :scale="3"></VlIcon>
  </div>
  <div style="display: inline-flex;margin: 20px;">
    <VlIcon iconName="design-rule-1" :scale="3"></VlIcon>
  </div>
  <div style="display: inline-flex;margin: 20px;">
    <VlIcon iconName="design-rule-2" :scale="3"></VlIcon>
  </div>
  <div style="display: inline-flex;margin: 20px;">
    <VlIcon iconName="ui" :scale="3"></VlIcon>
  </div>
</template>

<script setup lang="ts">
import VlIcon from '@/lib/VlIcon.vue';
</script>
