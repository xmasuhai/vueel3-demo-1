<demo>支持 禁用</demo>
<script lang="ts">
export default {
  name: 'Switch2Demo',
  __sourceCode: '',
  __sourceCodeTitle: ''
};
</script>

<script setup lang="ts">
import VueSwitch from '@/lib/Switch.vue';
import {ref} from 'vue';

const bool = ref(false);
</script>

<template>
  <VueSwitch v-model:toggleValue="bool" disabled/>
</template>
