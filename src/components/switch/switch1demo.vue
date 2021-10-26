<demo>常规用法</demo>
<script setup lang="ts">
import VueSwitch from '@/lib/Switch.vue';
import {ref} from 'vue';

const bool = ref(false);
</script>

<script lang="ts">
export default {
  name: 'Switch1Demo'
};
</script>

<template>
  <VueSwitch v-model:toggleValue="bool"/>
</template>
