<script setup lang="ts">
import Demo from '@/components/components_demos/Demo.vue';
import Switch1demo from '@/components/components_demos/switch/switch1demo.vue';
import Switch2demo from '@/components/components_demos/switch/switch2demo.vue';
import Switch3demo from '@/components/components_demos/switch/switch3demo.vue';
import SwitchDoc from '@/markdown/components/switch.md';
</script>

<template>
  <div>
    <h1>Switch 组件示例 </h1>
    <div class="demo">
      <Demo :component="Switch1demo"></Demo>
      <Demo :component="Switch2demo"></Demo>
      <Demo :component="Switch3demo"></Demo>
    </div>
  </div>
  <SwitchDoc></SwitchDoc>
</template>

<script lang="ts">
export default {
  name: 'SwitchDemo'
};
</script>
