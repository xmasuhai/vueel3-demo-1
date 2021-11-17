<demo>支持 禁用</demo>
<script lang="ts">
export default {
  name: 'Switch2Demo',
  __sourceCode: '',
  __sourceCodeTitle: ''
};
</script>

<script setup lang="ts">
import VlSwitch from '@/lib/VlSwitch.vue';
import {ref} from 'vue';

const bool = ref(false);
</script>

<template>
  <VlSwitch v-model:toggleValue="bool" disabled/>
  <VlSwitch v-model:toggleValue="bool" :disabled="true"/>
</template>
