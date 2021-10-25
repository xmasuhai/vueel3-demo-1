<script setup lang="ts">
import {computed, defineProps, toRefs} from 'vue';
/*
interface Props {
  name?: string;
  scale?: number | string;
  flip?: '' | 'horizontal' | 'vertical';
  spin?: boolean;
  pulse?: boolean;
  customClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
  name: '',
  scale: 1,
  flip: '',
  spin: false,
  pulse: false,
  customClass: ''
});

*/

const icons: Record<string, string> = {};
const props = defineProps({
  name: {
    type: String,
    validator(val: string) {
      if (val) {
        if (!(val in icons)) {
          console.warn(`Invalid prop: prop "name" is referring to an unregistered icon "${val}".` +
            `\nPlease make sure you have imported this icon before using it.`);
          return false;
        }
        return true;
      }
      console.warn(`Invalid prop: prop "name" is required.`);
      return false;
    }
  },
  scale: [Number, String],
  spin: Boolean,
  inverse: {
    type: Boolean,
    default: false
  },
  pulse: {
    type: Boolean,
    default: false
  },
  flip: {
    type: String,
    default: '',
    validator(val: string) {
      return ['', 'horizontal', 'vertical'].includes(val);
    }
  },
  label: String,
  customClass: String
});

// 解构的对象不能为undefined、null 否则会报错，要给被解构的对象一个默认值
const {name, scale, flip, spin, inverse, pulse, customClass} = toRefs(props) || {};

const iconClass = computed(() => {
  return {
    'vue-icon': true,
    'vue-icon-spin': spin,
    'vue-icon-flip-horizontal': flip.value === 'horizontal',
    'vue-icon-flip-vertical': flip.value === 'vertical',
    'vue-icon-inverse': inverse,
    'vue-icon-pulse': pulse
  };
});

</script>

<template>
  <svg :class="iconClass">

  </svg>
</template>


<script lang="scss">
export default {
  name: 'Icon'
}
</script>

<style scoped>

@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
