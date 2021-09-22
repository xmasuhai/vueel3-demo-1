<template>
  <Switch v-model:value="bool"></Switch>
</template>

<script setup lang="ts">
import {ref} from 'vue';

const bool = ref(false);
</script>

<script lang="ts">
import Switch from '@/lib/Switch.vue';

export default {
  components: {
    Switch
  }
};
</script>
