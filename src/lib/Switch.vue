<script setup lang="ts">
import {toRefs} from 'vue';

interface Props {
  toggleValue?: boolean;
  activeText?: string;
  inactiveText?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  toggleValue: false,
  activeText: '',
  inactiveText: '',
  disabled: false
});

const {toggleValue, disabled, activeText, inactiveText} = toRefs(props) || {};

const emit = defineEmits(['update:toggleValue']);

const toggle = () => {
  if (!disabled.value) {
    emit('update:toggleValue', !toggleValue.value);
  }
};
</script>

<template>
  <div class="vue-switch-button-wrapper">
    <button class="vue-switch"
            :class="{
                    [`vue-switch-checked`]: toggleValue,
                    [`vue-switch-disabled`]: disabled
                    }"
            @click="toggle">
      <span class="vue-switch-toggle">
        <span v-show="!toggleValue"
              class="close-line"></span>
        <template v-if="activeText">
          <div class="vue-switch-label open" v-show="toggleValue">
            {{ activeText }}
          </div>
          <div class="vue-switch-label close" v-show="!toggleValue">
            {{ inactiveText }}
          </div>
        </template>
      </span>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Switch',
};
</script>

<style lang="scss">
@use "sass:math";
@import 'styles/var';

.vue-switch-button-wrapper {
  .vue-switch {
    height: $height;
    width: $height * 2;
    border: none;
    background: #bfbfbf;
    border-radius: math.div($height, 2);
    position: relative;

    .vue-switch-toggle {
      line-height: $toggle-ball-height;
      position: absolute;
      top: 2px;
      left: 2px;
      height: $toggle-ball-height;
      width: $toggle-ball-height;
      background: white;
      border-radius: math.div($toggle-ball-height, 2);
      transition: all .25s;

      .vue-switch-label {
        color: #fff;
        font-size: 18px;

        &.open {
          transform: translateX(-26px);
        }

        &.close {
          transform: translateX(26px);
        }
      }

      .close-line {
        width: 10px;
        height: 2px;
        background-color: #bfbfbf;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

    }

    &-checked {
      background-color: #1890ff;

      & > .vue-switch-toggle {
        left: calc(100% - #{$toggle-ball-height} - 2px);

      }
    }

    &-disabled {
      cursor: not-allowed;
      background: lighten(#bfbfbf, 10%);
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
}

</style>
