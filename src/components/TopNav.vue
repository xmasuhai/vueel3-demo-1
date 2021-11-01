<script setup lang="ts">
import {inject, Ref} from 'vue';

const asideVisible = inject<Ref<boolean>>('asideVisible');
const toggleMenu = () => {
  asideVisible!.value = !asideVisible?.value;
};

// 是否显示菜单按钮
const props = defineProps({
  menuBtnVisible: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <nav class="top-nav">
    <header class="logo">
      <router-link to="/">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sky-wheel-1"></use>
        </svg>
      </router-link>
    </header>
    <ul class="menu">
      <li>
        <router-link to="/docs">文档</router-link>
      </li>
    </ul>
    <div v-if="menuBtnVisible"
         class="toggleAside"
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
@import '../lib/var';

%hamburgerSame {
  position: absolute;
  width: 50%;
  height: 1px;
  background-color: black;
}

.top-nav {
  color: $ugly-cyan;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 20;
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;

  > .logo {
    max-width: 6em;
    margin-right: auto;
    z-index: 3;

    .icon {
      width: 36px;
      height: 36px;
    }
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
    width: 32px;
    height: 30px;
    background: transparent;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translate3D(0, -50%, 0);
    z-index: 2;

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
        background-color: white;
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
        background-color: white;
        bottom: 50%;
        width: 60%;
        transform: rotate(45deg);
      }
    }
  }

  @media screen and(max-width: 768px) {
    > .logo {
      margin: 0 auto;
      transform: translateX(50%);
    }

    > .menu {
    }

    > .toggleAside {
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
