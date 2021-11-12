<script setup lang="ts">
import mitt from 'mitt';
import {provide, reactive, ref} from 'vue';
import {router} from '@/router';

// @ts-ignore
import  {Button} from './dist/lib/vueel3-ui.js'
console.log(Button);

const width = document.documentElement.clientWidth;
const asideVisible = ref(width > 500);
provide('asideVisible', asideVisible);
const emmiter = reactive(mitt());
provide('evBus', emmiter);

router.afterEach(() => {
  // 判断屏幕尺寸是否为移动端，决定侧边栏是否可见
  if (width <= 768) {
    emmiter.emit('evBus');
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
