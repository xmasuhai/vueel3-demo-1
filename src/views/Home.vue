<template>
  <div class="topNavAndBanner">
    <top-nav class="nav"></top-nav>
    <div class="banner">
      <h1>Vueel 3 UI</h1>
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
@import '../lib/var.scss';

.topNavAndBanner {
  background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%,
    rgba(183, 233, 230, 50) 100%);
  display: flex;
  flex-direction: column;

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

    > h1,
    h2 {
      background: linear-gradient(to left, rgb(112, 101, 214), rgb(230, 106, 213));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    > .actions {
      padding: 8px 0;

      a {
        line-height: 24px;
        margin: 0 8px;
        color: #fff;
        background: $ugly-green;
        display: inline-block;
        border-radius: $radius;
        padding: 8px 24px;
      }
    }
  }
}

</style>
