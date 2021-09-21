<template>
  <div class="layout">
    <top-nav class="nav"></top-nav>
    <div class="banner">
      <h1>Vueel 3 demo</h1>
      <h2>一个基于 Vue 3 的UI组件库</h2>
      <p class="actions">
        <a href="https://www.github.com/xmasuhai">GitHub</a> |
        <router-link to="/docs">开始</router-link>
      </p>
    </div>
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
@use "sass:math";
@import '../styles/var.scss';

$one-line-height: 28px;

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .nav {
    height: 5vh;

    &:deep(.toggleAside) {
      display: none;
    }
  }

  .banner {
    flex-grow: 1;
    height: 30vh;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: darkolivegreen;

    > .actions {
      padding: 8px 0;

      a {
        margin: 0 8px;
        background: #fff;
        display: inline-block;
        height: $one-line-height;
        line-height: $one-line-height;
        border-radius: math.div($one-line-height, 2);
        padding: 0 8px;
      }
    }
  }
}

</style>
