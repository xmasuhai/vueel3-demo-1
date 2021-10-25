<script setup lang="ts">
import VueSwitch from '@/lib/Switch.vue';
import {ref} from 'vue';

const bool = ref(false);
</script>

<template>
  <VueSwitch v-model:toggleValue="bool"/>
</template>
