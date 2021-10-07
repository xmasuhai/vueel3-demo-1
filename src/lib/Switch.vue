<script setup lang="ts">
const props = defineProps({
  value: Boolean
});

const emit = defineEmits(['update:value']);

const toggle = () => {
  emit('update:value', !props.value);
};
</script>

<template>
  <button class="vue-switch"
          :class="{[`vue-switch-checked`]: value}"
          @click="toggle">
    <span></span>
  </button>
</template>

<script lang="ts">
export default {
  name: 'Switch',
};
</script>

<style lang="scss">
@use "sass:math";
@import 'var';

.vue-switch {
  height: $height;
  width: $height * 2;
  border: none;
  background: #bfbfbf;
  border-radius: math.div($height, 2);
  position: relative;

  span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $toggle-ball-height;
    width: $toggle-ball-height;
    background: white;
    border-radius: math.div($toggle-ball-height, 2);
    transition: all .25s;
  }

  &-checked {
    background-color: #1890ff;

    & > span {
      left: calc(100% - #{$toggle-ball-height} - 2px);
    }
  }

  &:active {
    > span {
      width: calc(#{$toggle-ball-height} + 4px);
    }
  }

  &-checked:active {
    > span {
      width: calc(#{$toggle-ball-height} + 4px);
      margin-left: -4px;
    }
  }

}

</style>
