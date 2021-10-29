<script setup lang="ts">
import {provide, ref} from 'vue';
import {router} from '@/router';

const width = document.documentElement.clientWidth;
const asideVisible = ref(width > 500);
provide('asideVisible', asideVisible);

router.afterEach(() => {
  // 判断屏幕尺寸是否为移动端，决定侧边栏是否可见
  if (width <= 500) {
    asideVisible.value = false;
  } else {
    // 屏幕宽度小于500px 不显示代码行数 prismjs line-numbers
    document.querySelector('body')?.classList.add('line-numbers');
  }
});
</script>

<script lang="ts">
export default {
  name: 'App'
};
</script>

<template>
  <router-view></router-view>
</template>
