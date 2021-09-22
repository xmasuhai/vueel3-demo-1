<template>
  <Switch v-model:value="y"></Switch>
</template>

<script setup lang="ts">
import {ref} from 'vue';

const y = ref(false);
</script>

<script lang="ts">
import Switch from '@/lib/Switch.vue';

export default {
  components: {
    Switch
  }
};
</script>
