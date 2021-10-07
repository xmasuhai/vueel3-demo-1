<script setup lang="ts">
interface Props {
  theme?: 'button' | 'link' | 'text';
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'button'
});
const {theme} = props;

</script>

<template>
  <button class="vue-button"
          :class="`vue-theme-${theme}`">
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
}

</style>
