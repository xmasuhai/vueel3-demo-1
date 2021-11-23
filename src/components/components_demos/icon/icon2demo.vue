<demo>自定义配色</demo>
<script lang="ts">
export default {
  name: 'Tab1Demo',
  __sourceCode: '',
  __sourceCodeTitle: '',
};

</script>

<template>
  <div style="display: inline-flex;margin: 20px;">
    <VlIcon iconName="search" fill="#4e6ef2" :scale="2"></VlIcon>
  </div>
  <div style="display: inline-flex;margin: 20px;">
    <VlIcon iconName="download" fill="#48b885" :scale="2"></VlIcon>
  </div>
  <div style="display: inline-flex;margin: 20px;">
    <VlIcon iconName="info-solid" fill="#3a94ff" :scale="2"></VlIcon>
  </div>
  <div style="display: inline-flex;margin: 20px;">
    <VlIcon iconName="link" fill="#8742d1" :scale="2"></VlIcon>
  </div>
  <div style="display: inline-flex;margin: 20px;">
    <VlIcon iconName="warning" fill="orange" :scale="2"></VlIcon>
  </div>
</template>

<script setup lang="ts">
import VlIcon from '@/lib/VlIcon.vue';
</script>
