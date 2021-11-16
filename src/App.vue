<script setup lang="ts">
import useEmitter from '@/lib/hooks/useEmitter';
import {provide, ref} from 'vue';
import {router} from '@/router';

const width = document.documentElement.clientWidth;
const asideVisible = ref(width > 500);
provide('asideVisible', asideVisible);

const emitter = useEmitter();
provide('evBus', emitter);

router.afterEach(() => {
  // 判断屏幕尺寸是否为移动端，决定侧边栏是否可见
  if (width <= 768) {
    // 发布更新侧边栏事件
    emitter.emit('update:asideVisible');
    asideVisible.value = false;
  } else {
    // 屏幕宽度大于500px 显示代码行数 prismjs line-numbers
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
