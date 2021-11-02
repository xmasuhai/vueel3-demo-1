<script setup lang="ts">
import {computed, toRefs} from 'vue';

interface Props {
  theme?: 'button' | 'link' | 'text';
  size?: 'big' | 'medium ' | 'small';
  level?: 'normal' | 'primary' | 'danger';
  disabled?: boolean;
  isLoading?: boolean;
  showIcon?: boolean;
  isRound?: boolean;
  isCircle?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'button',
  size: 'medium ',
  level: 'normal',
  disabled: false,
  isLoading: false,
  showIcon: false,
  isRound: false,
  isCircle: false

});

// 解构的对象不能为undefined、null 否则会报错，要给被解构的对象一个默认值
const {theme, size, level, disabled, isLoading} = toRefs(props) || {};

// 计算classes
const classes = computed(() => {
  return {
    [`vue-theme-${theme.value}`]: theme.value,
    [`vue-size-${size.value}`]: size.value,
    [`vue-level-${level.value}`]: level.value,
  };
});
</script>

<template>
  <button class="vue-button"
          :class="classes"
          :disabled="disabled">
    <span class="vue-loadingIndicator"
          v-if="isLoading">
    </span>
    <slot>按钮内容</slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'Button'
};
</script>

<style lang="scss">
@use 'sass:math';
@import 'var.scss';
@import 'theme-var.scss';
@import 'mixins.scss';
@import 'animate.scss';

// .vue-button
@include bem(button) {
  // layout position
  height: $--size-medium;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  position: relative;
  // shape bg
  background: $button-background;
  transition: background 250ms;
  border: 1px solid $border-color;
  border-radius: $radius;
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
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }

  // level
  // primary info success
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

  //theme
  // link text
  &.vue-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $light-font-color;

    &:hover,
    &:focus {
      color: lighten($light-font-color, 10%);
    }
  }

  &.vue-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover,
    &:focus {
      background: darken(white, 5%);;
    }
  }

  // level
  // primary danger
  &.vue-theme-button {
    // primary
    &.vue-level-primary {
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
    &.vue-level-danger {
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

  &.vue-theme-link {
    // danger
    &.vue-level-danger {
      color: $danger;

      &:hover,
      &:focus {
        color: darken($danger, 10%);
      }
    }
  }

  &.vue-theme-text {
    // primary
    &.vue-level-primary {
      color: $light-font-color;

      &:hover,
      &:focus {
        color: darken($light-font-color, 10%);
      }
    }

    // danger
    &.vue-level-danger {
      color: $danger;

      &:hover,
      &:focus {
        color: darken($danger, 10%);
      }
    }
  }

  // disabled
  &.vue-theme-button {
    &[disabled]:hover {
      border-color: $grey;
    }
  }

  // theme disabled
  &.vue-theme-button,
  &.vue-theme-link,
  &.vue-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }

  // size
  // big normal small
  &.vue-size-big {
    font-size: $--font-size-big;
    line-height: $--font-size-big;
    height: $--size-big;
    padding: 0 16px;

    &-round {
      border-radius: math.div($--font-size-big, 2);
    }

    &-circle {
      min-width: $--font-size-big;
      border-radius: 50%;
    }

  }

  &.vue-size-medium {
    font-size: $--font-size-medium;
    line-height: $--font-size-medium;
    height: $--size-medium;
    padding: 0 8px;

    &-round {
      border-radius: math.div($--font-size-medium, 2);
    }

    &-circle {
      min-width: $--font-size-medium;
      border-radius: 50%;
    }

  }

  &.vue-size-small {
    font-size: $--font-size-small;
    line-height: $--font-size-small;
    height: $--size-small;
    padding: 0 4px;

    &-round {
      border-radius: math.div($--font-size-small, 2);
    }

    &-circle {
      min-width: $--font-size-small;
      border-radius: 50%;
    }
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
