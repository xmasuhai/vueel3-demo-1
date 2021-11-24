<script setup lang="ts">
import {computed, toRefs} from 'vue';

interface Props {
  toggleValue?: boolean;
  disabled?: boolean;
  activeText?: string;
  inactiveText?: string;
}

const props = withDefaults(defineProps<Props>(), {
  toggleValue: false,
  disabled: false,
  activeText: '',
  inactiveText: ''
});

const {toggleValue, disabled, activeText, inactiveText} = toRefs(props) || {};

const emits = defineEmits(['update:toggleValue']);

const openClose = computed(() => {
  return {
    open: toggleValue.value,
    close: !toggleValue.value,
  };
});

const showText = computed(() => {
  return toggleValue.value ? activeText.value : inactiveText.value;
});

const toggle = () => {
  if (!disabled.value) {
    emits('update:toggleValue', !toggleValue.value);
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
            @click="toggle"
            type="button">
      <span class="vue-switch-toggle">
        <span v-show="!toggleValue"
              class="close-line"></span>
        <span class="vue-switch-label"
              :class="openClose">
          {{ showText }}
        </span>
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

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slideLeft {
  0% {
  }
  100% {
    transform: translateX(-26px);
  }
}

@keyframes slideRight {
  0% {
  }
  100% {
    transform: translateX(26px);
  }
}

.vue-switch-button-wrapper {
  &:focus {
    outline: none;
  }

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
        display: block;
        color: #fff;
        font-size: 18px;
        position: relative;

        &.open {
          animation: fade .25s forwards .05s;
          animation-name: slideLeft;
          animation-direction: normal;
          animation-duration: .25s;
          animation-fill-mode: forwards;
        }

        &.close {
          animation: fade .25s forwards .05s;
          animation-name: slideRight;
          animation-direction: normal;
          animation-duration: .25s;
          animation-fill-mode: forwards;
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
