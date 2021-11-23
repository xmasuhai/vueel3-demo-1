<demo>自定义尺寸</demo>
<script lang="ts">
export default {
  name: 'Tab1Demo',
  __sourceCode: '',
  __sourceCodeTitle: '',
};

</script>

<template>
  <div class="svg-wrapper" style="margin: 5px;">
    <VlIcon iconName="search" :scale="1"></VlIcon>
  </div>
  <div class="svg-wrapper" style="margin: 10px;">
    <VlIcon iconName="download" :scale="2"></VlIcon>
  </div>
  <div class="svg-wrapper" style="margin: 30px;">
    <VlIcon iconName="info-solid" :scale="3"></VlIcon>
  </div>
  <div class="svg-wrapper" style="margin: 50px;">
    <VlIcon iconName="link" :scale="4"></VlIcon>
  </div>
  <div class="svg-wrapper" style="margin: 80px;">
    <VlIcon iconName="warning" :scale="8"></VlIcon>
  </div>
</template>

<script setup lang="ts">
import VlIcon from '@/lib/VlIcon.vue';
</script>

<style>
.svg-wrapper {
  display: inline-flex;
}
</style>
