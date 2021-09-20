<script setup lang="ts">
import {inject, Ref} from 'vue';

const asideVisible = inject<Ref<boolean>>('asideVisible');
const toggleMenu = () => {
  asideVisible!.value = !asideVisible?.value;
};
</script>

<template>
  <div class="top-nav">
    <header class="logo">LOGO</header>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <div class="toggleAside"
         :class="{active: asideVisible}"
         @click="toggleMenu">
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TopNav'
};
</script>

<style lang="scss" scoped>
.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 10;
  background: dodgerblue;
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;

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

  > .toggleAside {
    display: none;
    width: 28px;
    height: 26px;
    background: transparent;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translate3D(0, -50%, 0);
    transition: .25s;

    &::before {
      content: '';
      position: absolute;
      width: 18px;
      height: 1px;
      background-color: white;
      box-shadow: 0 6px 0 white;
      transition: .25s;
      transform: translate3D(0, -6px, 0);
    }

    &::after {
      content: '';
      position: absolute;
      width: 18px;
      height: 1px;
      background-color: white;
      transition: .25s;
      transform: translate3D(0, 6px, 0);
    }

    &.active {
      background: #f7226a;

      &::before {
        transform: translateZ(0) rotate(45deg);
        box-shadow: 0 0 0 #fff;
      }

      &::after {
        transform: translateZ(0) rotate(-45deg);
      }
    }
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }

    > .logo {
      margin: 0 auto;
    }

    > .toggleAside {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      transition: .25s;
    }
  }
}
</style>
