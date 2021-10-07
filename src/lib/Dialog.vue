<script setup lang="ts">
import Button from '@/lib/Button.vue';
</script>

<template>
  <div class="vue-dialog-overlay"></div>
  <div class="vue-dialog-wrapper">
    <header>标题</header>
    <main>
      <p>第一行字</p>
      <p>第二行字</p>
    </main>
    <footer>
      <Button>OK</Button>
      <Button>Cancel</Button>
    </footer>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Dialog'
};
</script>

<style lang="scss" scoped>

</style>
