<script lang="ts" setup>
import ArticleTitleList from '@/components/aside/ArticleTitleList.vue';
import {inject, Ref} from 'vue';

const asideVisible = inject<Ref<boolean>>('asideVisible');
const routerInfo = [
  {
    toPath: 'intro',
    textInfo: '介绍'
  },
  {
    toPath: 'install',
    textInfo: '安装'
  },
  {
    toPath: 'get-started',
    textInfo: '开始使用'
  }
];
const compInfo = [
  {
    toPath: 'icons',
    textInfo: 'Icons 组件'
  },
  {
    toPath: 'button',
    textInfo: 'Button 组件'
  },
  {
    toPath: 'switch',
    textInfo: 'Switch 组件'
  },
  {
    toPath: 'dialog',
    textInfo: 'Dialog 组件'
  },
  {
    toPath: 'tabs',
    textInfo: 'Tabs 组件'
  },
  {
    toPath: 'collapse',
    textInfo: 'Collapse 组件'
  },
];
</script>

<template>
  <transition name="aside">
    <aside class="aside-menu" v-if="asideVisible">
      <ArticleTitleList articleTitle="文档"
                        :routerInfo="routerInfo"
                        :toDir="'/docs/intro'">
      </ArticleTitleList>
      <ArticleTitleList articleTitle="组件列表"
                        :routerInfo="compInfo"
                        :toDir="'icons'">
      </ArticleTitleList>
    </aside>
  </transition>
</template>

<script lang="ts">
export default {
  name: 'AsideMenu'
};
</script>

<style lang="scss" scoped>
.aside-enter-active,
.aside-leave-active {
  transition: all 0.25s ease;
}

.aside-enter-from,
.aside-leave-to {
  opacity: 0;
  transform: translate3D(-100%, 0, 0);
}

.aside-menu {
  flex-shrink: 0;
  position: fixed;
  top: 0;
  left: 0;
  background: linear-gradient(
          145deg,
          rgba(183, 233, 230, 50) 100%,
          rgba(227, 255, 253, 1) 0%);
  width: 150px;
  padding: 60px 0 16px;
  height: 100vh;
  color: black;
  z-index: 100;

}

</style>
