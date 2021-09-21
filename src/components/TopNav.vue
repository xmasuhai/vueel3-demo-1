<script setup lang="ts">
import {inject, Ref} from 'vue';

const asideVisible = inject<Ref<boolean>>('asideVisible');
const toggleMenu = () => {
  asideVisible!.value = !asideVisible?.value;
};
</script>

<template>
  <nav class="top-nav">
    <header class="logo">LOGO</header>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <div class="toggleAside"
         :class="{active: asideVisible}"
         @click="toggleMenu">
      <div class="middle-line"></div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'TopNav'
};
</script>

<style lang="scss" scoped>
%hamburgerSame {
  position: absolute;
  width: 50%;
  height: 1px;
  background-color: white;
}

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

    &::before {
      content: '';
      @extend %hamburgerSame;
      transition: ease .35s;
      top: 30%;
    }

    &::after {
      content: '';
      @extend %hamburgerSame;
      transition: ease .35s;
      bottom: 23%;
    }

    & .middle-line {
      @extend %hamburgerSame;
      transition: cubic-bezier(.26, .18, .27, 1.58) .35s;
      transform: translate3D(50%, 50%, 0);
      top: 50%;
      left: 0;
    }

    &.active {
      &::before {
        top: 45%;
        width: 60%;
        transform: rotate(-45deg);
      }

      & .middle-line {
        background: #f7226a;
        width: 100%;
        height: 100%;
        top: -50%;
        left: -50%;
        z-index: -1;
      }

      &::after {
        bottom: 50%;
        width: 60%;
        transform: rotate(45deg);
      }
    }
  }

  @media screen and(max-width: 768px) {
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
    }
  }
}
</style>
