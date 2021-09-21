<template>
  <Switch :value="y"
          @input="y = $event"
  >
  </Switch>
</template>

<script setup lang="ts">
import {ref} from 'vue';

const y = ref(true);
</script>

<script lang="ts">
import Switch from '@/lib/Switch.vue';

export default {
  components: {
    Switch
  }
};
</script>
