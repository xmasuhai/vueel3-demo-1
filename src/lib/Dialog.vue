<template>
  <div v-show="visible">
    <div class="vue-dialog-overlay"></div>
    <div class="vue-dialog-wrapper">
      <div class="vue-dialog">
        <header>Title <span class="vue-dialog-close"></span></header>
        <main>
          <p>some content...</p>
          <p>some content...</p>
        </main>
        <footer>
          <Button level="main">OK</Button>
          <Button>Cancel</Button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/lib/Button.vue';
import {onUpdated, toRefs} from 'vue';

const props = defineProps({
  visible: Boolean
});

// destructured prop visible is Value (integer for e.g.) which cannot be reactive by itself
// 解构出来的visible为简单类型，不再具有数据响应性
// 需要调用 toRefs(props) 赋予数据响应性
const {visible} = toRefs(props);

onUpdated(() => {
  console.log('visible: ', visible.value);
});

</script>

<style lang="scss" scoped>
@import 'var.scss';

.vue-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;

  // 邻层的遮罩层
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }

  // 外层样式
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }

  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }

  > main {
    padding: 12px 16px;
  }

  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }

  // 关闭的叉字
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;

    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
