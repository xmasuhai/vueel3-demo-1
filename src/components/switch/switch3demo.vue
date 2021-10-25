<!--<demo>支持 文字 </demo>-->
<script setup lang="ts">
import VueSwitch from '@/lib/Switch.vue';
import {ref} from 'vue';

const bool = ref(false);
</script>

<template>
  <VueSwitch v-model:toggleValue="bool"
             activeText="on"
             inactiveText="off">
  </VueSwitch>
  <VueSwitch v-model:toggleValue="bool"
             activeText="开"
             inactiveText="关">
  </VueSwitch>
</template>
