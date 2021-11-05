<script setup lang="ts">
import Button from './Button.vue';
import {computed, toRefs} from 'vue';

// 注册外部带默认值的数据
interface Props {
  visible?: boolean;
  closeOnClickOverlay?: boolean;
  zIndexLevel?: 1 | 10 | 100 | 1000;
  ok?: Function;
  cancel?: Function;
}

const props = withDefaults(defineProps<Props>(), {
  visible: false,
  closeOnClickOverlay: true,
  zIndexLevel: 100
});

// destructured prop visible is Value (integer for e.g.) which cannot be reactive by itself
// 解构出来的visible为简单类型，不再具有数据响应性
// 需要调用 toRefs(props) 赋予数据响应性
// 或者直接使用 props.visible
const {visible, closeOnClickOverlay, zIndexLevel} = toRefs(props) || {};

const zIndexLevelOverlayClass = computed(() => {
  return {
    [`vue-dialog-overlay-${zIndexLevel.value}`]: true
  };
});

const zIndexLevelWrapperClass = computed(() => {
  return {
    [`vue-dialog-wrapper-${zIndexLevel.value}`]: true
  };
});

// 注册发布自定义事件
const emits = defineEmits(['update:visible']);

// 关闭对话框逻辑
const close = () => {
  emits('update:visible', false);
};

// 遮罩层关闭逻辑
const onClickOverlay = () => {
  if (closeOnClickOverlay.value) {
    close();
  }
};

// OK Cancel按钮关闭逻辑
const okFn = () => {
  if (props.ok?.() !== false) {
    close();
  }
};
const cancelFn = () => {
  if (props.cancel?.() !== false) {
    close();
  }
};
</script>

<template>
  <template v-if="visible">
    <teleport to="body">
      <div class="vue-dialog-overlay"
           :class="zIndexLevelOverlayClass"
           @click="onClickOverlay">
      </div>
      <div class="vue-dialog-wrapper"
           :class="zIndexLevelWrapperClass">
        <div class="vue-dialog">
          <header>
            <slot name="title">标题</slot>
            <span class="vue-dialog-close"
                  @click="close"></span>
          </header>
          <main>
            <slot name="content">内容</slot>
          </main>
          <footer>
            <Button level="primary" @click="okFn">OK</Button>
            <Button @click="cancelFn">Cancel</Button>
          </footer>
        </div>
      </div>
    </teleport>
  </template>
</template>

<style lang="scss" scoped>
@import 'styles/var.scss';

.vue-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;

  // 邻层的遮罩层 z-index: $dialog-z-index;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.8);
  }

  // 对话框样式 z-index: $dialog-z-index + 1;
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  $dialog-z-index: 10, 100, 1000;
  @each $zIndex in $dialog-z-index {
    // 邻层的遮罩层 z-index: $zIndex;
    &-overlay-#{$zIndex} {
      z-index: $zIndex;
    }

    // 对话框样式 z-index: $zIndex + 1;
    &-wrapper-#{$zIndex} {
      z-index: $zIndex + 1;
    }
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
