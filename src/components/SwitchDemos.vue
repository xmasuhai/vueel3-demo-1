<template>
  <div>
    <h1>Switch 组件示例 </h1>
    <div class="demo">
      <Demo :component="Switch1demo"></Demo>
      <Demo :component="Switch2demo"></Demo>
      <Demo :component="Switch3demo"></Demo>
    </div>
  </div>
</template>

<script setup lang="ts">
import Demo from '@/components/Demo.vue';
import Switch1demo from '@/components/switch/switch1demo.vue';
import Switch2demo from '@/components/switch/switch2demo.vue';
import Switch3demo from '@/components/switch/switch3demo.vue';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
</script>

<script lang="ts">
export default {
  name: 'SwitchDemo'
};
</script>
