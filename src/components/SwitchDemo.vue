<template>
  <div>
    <VueSwitch v-model:toggleValue="bool1">
    </VueSwitch>
    <VueSwitch v-model:toggleValue="bool2"
               activeText="on"
               inactiveText="off">
    </VueSwitch>
    <VueSwitch v-model:toggleValue="bool3"
               activeText="开"
               inactiveText="关">
    </VueSwitch>
  </div>
</template>

<script setup lang="ts">
import VueSwitch from '@/lib/Switch.vue';
import {ref} from 'vue';

const bool1 = ref(false);
const bool2 = ref(false);
const bool3 = ref(false);
</script>

<script lang="ts">
export default {
  name: 'SwitchDemo'
};
</script>
