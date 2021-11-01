<script setup lang="ts">
import '@/assets/icon/svg.js';
import {computed, toRefs} from 'vue';
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

const props = defineProps({
  iconName: {
    type: String,
    require: true,
    validator(val: string) {
      const iconsNames = [
        'vite',
        'mobile-design',
        'design-rule-1',
        'design-rule-2',
        'frontend',
        'vue',
        'ui',
        'ts',
        'gear-green',
        'gear-blue',
        'gear3',
        'sky-wheel-1',
        'sky-wheel-2',
        'sky-wheel-3',
        'tire',
      ];

      (!val)
        ? console.warn(`Invalid prop: prop "name" is required.`)
        : (!iconsNames.includes(val))
          ? console.log(`Invalid prop: prop "name" is referring to an unregistered icon "${val}".
                         Please make sure you have imported this icon before using it.`)
          : null;
      return iconsNames.includes(val);
    }
  },
  scale: {
    type: Number,
    default: 1,
    validator(val: number) {
      return (val >= 2 && val <= 10);
    }
  },
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
const {iconName, scale, flip, spin, inverse, pulse, customClass} = toRefs(props) || {};

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
const iconScale = computed(() => {
  return {
    [`vue-icon-${scale.value}x`]: true
  };
});
</script>

<template>
  <span class="vue-icon-wrapper">
    <svg class="vue-icon-svg"
         :class="{iconClass: true}, iconScale"
         aria-hidden="true">
      <use :xlink:href="`#icon-${iconName}`">
      </use>
    </svg>
  </span>
</template>

<script lang="ts">
export default {
  name: 'Icon'
};
</script>

<style lang="scss" scoped>
.vue-icon-wrapper {
  line-height: 1em;
  width: 1em;
  height: 1em;

  .vue-icon-svg {
    width: 1em;
    height: 1em;

  }

}

@for $i from 2 through 10 {
  .vue-icon-#{$i}x {
    transform: scale($i);
  }
}

@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
