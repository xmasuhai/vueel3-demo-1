<template>
  <div>
    <Switch v-model:value="bool"></Switch>
    <VueSwitch v-model:value="bool" activeText="开" inactiveText="关">
    </VueSwitch>
  </div>
</template>

<script setup lang="ts">
import Switch from '@/lib/Switch.vue';
import {ref} from 'vue';

const bool = ref(false);
</script>

<script lang="ts">
export default {
  name: 'SwitchDemo'
};
</script>
