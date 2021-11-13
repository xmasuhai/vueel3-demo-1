<script setup lang="ts">
import Icon from './VlIcon.vue';
import {computed, toRefs} from 'vue';

interface Props {
  theme?: 'button' | 'link' | 'text';
  size?: 'big' | 'medium ' | 'small';
  level?: 'normal' | 'primary' | 'danger';
  shape?: 'rect' | 'capsule' | 'circle';
  disabled?: boolean;
  isLoading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'button',
  size: 'medium ',
  level: 'normal',
  shape: 'rect',
  disabled: false,
  isLoading: false
});

// 解构的对象不能为undefined、null 否则会报错，要给被解构的对象一个默认值
const {theme, size, level, disabled, isLoading, shape} = toRefs(props) || {};

// 计算classes
const classes = computed(() => {
  return {
    [`vue-button-theme-${theme.value}`]: theme.value,
    [`vue-button-size-${size.value}`]: size.value,
    [`vue-button-level-${level.value}`]: level.value,
    [`vue-button-shape-${shape.value}`]: shape.value,
  };
});
</script>

<template>
  <button class="vue-button"
          :class="classes"
          :disabled="disabled"
          type="button">
    <span class="vue-loadingIndicator"
          v-if="isLoading">
    </span>
    <slot>
      <Icon></Icon>
    </slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'Button'
};
</script>

<style lang="scss">
@use 'sass:math';
@import 'styles/var.scss';
@import 'styles/theme-var.scss';
@import 'styles/mixins.scss';
@import 'styles/animate.scss';

// .vue-button
@include bem(button) {
  // layout position
  height: $--size-medium;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  position: relative;
  // bg
  background: $button-background;
  transition: background 250ms;
  // shape
  border: 1px solid $border-color;
  box-shadow: 0 1px 0 fade-out($shadow-color, .95);
  // font
  font-size: $--font-size-medium;
  color: $basic-font-color;
  white-space: nowrap;
  // SP effect
  cursor: pointer;

  // side by side
  & + & {
    margin-left: 8px;
  }

  // basic level
  &:hover,
  &:focus {
    border-color: $light-font-color;
    color: $light-font-color;

    > span > svg {
      fill: $light-font-color;
    }

  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }

  // level
  // primary info success
  /*
  &-primary {// focus,hover的时，背景色变浅
    &:focus,
    &:hover {}
    &:active {}
    &-disabled {
      &:focus,
      &:hover,
      &:active {}
    }
  }

  &-info {
  }

  &-success {
  }

  &-warning {
  }

  &-text {
  }

  &-link {
  }

  &-error {
  }
  */

  //theme
  // .vue-theme-link | vue-theme-text
  &.vue-button-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $light-font-color;

    &:hover,
    &:focus {
      color: lighten($light-font-color, 10%);
    }
  }

  &.vue-button-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover,
    &:focus {
      background: darken(white, 5%);;
    }
  }

  // level
  //  .vue-button-theme-button | vue-theme-primary | vue-theme-danger
  &.vue-button-theme-button {
    &:hover,
    &:focus {
    }

    // primary
    &.vue-button-level-primary {
      background: $light-font-color;
      color: white;
      border-color: $light-font-color;

      &:hover,
      &:focus {
        background: darken($light-font-color, 10%);
        border-color: darken($light-font-color, 10%);
      }
    }

    // danger
    &.vue-button-level-danger {
      background: $danger;
      border-color: $danger;
      color: white;

      &:hover,
      &:focus {
        background: darken($danger, 10%);
        border-color: darken($danger, 10%);
      }
    }

  }

  &.vue-button-theme-link {
    // danger
    &.vue-button-level-danger {
      color: $danger;

      &:hover,
      &:focus {
        color: darken($danger, 10%);
      }
    }
  }

  &.vue-button-theme-text {
    // primary
    &.vue-button-level-primary {
      color: $light-font-color;

      &:hover,
      &:focus {
        color: darken($light-font-color, 10%);
      }
    }

    // danger
    &.vue-button-level-danger {
      color: $danger;

      &:hover,
      &:focus {
        color: darken($danger, 10%);
      }
    }
  }

  // disabled
  &.vue-button-theme-button {
    &[disabled]:hover {
      border-color: $grey;
    }
  }

  // theme disabled
  &.vue-button-theme-button,
  &.vue-button-theme-link,
  &.vue-button-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }

  // size
  // big normal small
  &.vue-button-size-big {
    font-size: $--font-size-big;
    line-height: $--font-size-big;
    height: $--size-big;
    padding: 0 16px;
    @include shape($--size-big);
  }

  &.vue-button-size-medium {
    font-size: $--font-size-medium;
    line-height: $--font-size-medium;
    height: $--size-medium;
    padding: 0 8px;
    @include shape();
  }

  &.vue-button-size-small {
    font-size: $--font-size-small;
    line-height: $--font-size-small;
    height: $--size-small;
    padding: 0 4px;
    @include shape($--size-small);
  }

  // loading
  > .vue-loadingIndicator {
    pointer-events: none;
    width: $loading-indicator-size;
    height: $loading-indicator-size;
    display: inline-block;
    margin-right: 4px;
    border-radius: math.div($loading-indicator-size, 2);
    border-color: $light-font-color $light-font-color $light-font-color transparent;
    border-style: solid;
    border-width: 2px;
    animation: vue-spin 1s infinite linear; // @import 'animate.scss';
  }

}

</style>
