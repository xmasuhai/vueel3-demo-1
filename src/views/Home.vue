<template>
  <div class="top-nav">
    <div class="logo">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
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
export default {
  name: 'Home'
};
</script>

<style lang="scss" scoped>
.top-nav {
  background: mediumseagreen;
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
