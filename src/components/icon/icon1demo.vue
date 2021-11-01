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
    <VueIcon iconName="frontend" :scale="3"></VueIcon>
  </div>
  <div style="display: inline-flex;margin: 20px;">
    <VueIcon iconName="vue" :scale="3"></VueIcon>
  </div>
  <div style="display: inline-flex;margin: 20px;">
    <VueIcon iconName="vite" :scale="3"></VueIcon>
  </div>
  <div style="display: inline-flex;margin: 20px;">
    <VueIcon iconName="ts" :scale="3"></VueIcon>
  </div>
  <div style="display: inline-flex;margin: 20px;">
    <VueIcon iconName="mobile-design" :scale="3"></VueIcon>
  </div>
  <div style="display: inline-flex;margin: 20px;">
    <VueIcon iconName="design-rule-1" :scale="3"></VueIcon>
  </div>
  <div style="display: inline-flex;margin: 20px;">
    <VueIcon iconName="design-rule-2" :scale="3"></VueIcon>
  </div>
  <div style="display: inline-flex;margin: 20px;">
    <VueIcon iconName="ui" :scale="3"></VueIcon>
  </div>
</template>

<script setup lang="ts">
import VueIcon from '@/lib/Icon.vue';
</script>
