<script setup lang="ts">
import {computed, toRefs} from 'vue';

interface Props {
  theme?: 'button' | 'link' | 'text';
  size?: 'normal' | 'big' | 'small';
  level?: 'normal' | 'primary' | 'danger';
  disabled?: boolean;
  loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'button',
  size: 'normal',
  level: 'normal',
  disabled: false,
  loading: false,
});

// 解构的对象不能为undefined、null 否则会报错，要给被解构的对象一个默认值
const {theme, size, level, disabled, loading} = toRefs(props) || {};

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
          v-if="loading">
    </span>
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'Button'
};
</script>

<style lang="scss">
@use 'sass:math';
@import 'var';

// basic button
.vue-button {
  align-items: center;
  background: $button-background;
  transition: background 250ms;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out($shadow-color, .95);
  color: $basic-font-color;
  cursor: pointer;
  display: inline-flex;
  height: $height;
  justify-content: center;
  padding: 0 12px;
  white-space: nowrap;

  & + & {
    margin-left: 8px;
  }

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

  // size
  // big small
  &.vue-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }

  &.vue-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
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

  // loading
  > .vue-loadingIndicator {
    width: $loading-indicator-size;
    height: $loading-indicator-size;
    display: inline-block;
    margin-right: 4px;
    border-radius: math.div($loading-indicator-size, 2);
    border-color: $light-font-color $light-font-color $light-font-color transparent;
    border-style: solid;
    border-width: 2px;
    animation: vue-spin 1s infinite linear;
  }

}

@keyframes vue-spin {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}

</style>
