<demo>支持 文字</demo>
<script lang="ts">
export default {
  name: 'Switch3Demo',
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
  <VlSwitch v-model:toggleValue="bool"
            activeText="on"
            inactiveText="off">
  </VlSwitch>
  <VlSwitch v-model:toggleValue="bool"
            activeText="开"
            inactiveText="关">
  </VlSwitch>
</template>
