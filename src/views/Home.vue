<template>
  <top-nav></top-nav>
  <div class="banner">
    <h1>Vueel 3 demo</h1>
    <h2>一个基于 Vue 3 的UI组件库</h2>
    <p class="actions">
      <a href="https://www.github.com">GitHub</a> |
      <a href="/">开始</a>
    </p>
  </div>
</template>

<script lang="ts">
import TopNav from '@/components/TopNav.vue';

export default {
  name: 'Home',
  components: {
    TopNav
  }
};
</script>

<style lang="scss" scoped>
</style>
