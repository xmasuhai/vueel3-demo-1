<script setup lang="ts">
import {ref} from 'vue';
import Button from '@/lib/Button.vue';
import Dialog from '@/lib/Dialog.vue';

const x = ref(false);
const toggle = () => {
  x.value = !x.value;
};
</script>

<template>
  <h1>Dialog 示例</h1>
  <h2>示例一</h2>
  <Button @click="toggle">toggle</Button>
  <Dialog :visible="x"></Dialog>
</template>

<script lang="ts">
export default {
  name: 'DialogDemo'
};
</script>

<style lang="scss" scoped>

</style>
