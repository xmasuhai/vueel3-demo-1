<script setup lang="ts">
import {computed} from 'vue';

interface Props {
  theme?: 'button' | 'link' | 'text';
  size?: 'normal' | 'big' | 'small';
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'button',
  size: 'normal'
});
const {theme, size} = props;

// 计算classes
const classes = computed(() => {
  return {
    [`vue-theme-${theme}`]: theme,
    [`vue-size-${size}`]: size
  };
});
</script>

<template>
  <button class="vue-button"
          :class="classes">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'Button'
};
</script>

<style lang="scss">
@import 'var';

// basic
.vue-button {
  align-items: center;
  background: $button-background;
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

  // button
  &.vue-theme-button {
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
  }

  // link
  &.vue-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $light-font-color;

    &:hover,
    &:focus {
      color: lighten($light-font-color, 10%);
    }
  }

  // text
  &.vue-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover,
    &:focus {
      background: darken(white, 5%);;
    }
  }

}

</style>
