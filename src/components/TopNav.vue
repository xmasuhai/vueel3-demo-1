<script setup lang="ts">
import {inject, Ref} from 'vue';

const asideVisible = inject<Ref<boolean>>('xxx');
const toggleMenu = () => {
  asideVisible!.value = !asideVisible?.value;
};
</script>

<template>
  <div class="top-nav">
    <div class="logo" @click="toggleMenu">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TopNav'
};
</script>

<style lang="scss" scoped>
.top-nav {
  position: relative;
  z-index: 10;
  background: dodgerblue;
  display: flex;
  padding: 16px;

  > .logo {
    max-width: 6em;
    margin-right: auto;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }
}
</style>
