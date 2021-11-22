<script setup lang="ts">
import './svg/svg.js';
import {computed, toRefs} from 'vue';

const props = defineProps({
  iconName: {
    type: String,
    require: true,
    validator(val: string) {
      const iconsNames = [
        'vite',
        'arrow-down',
        'download',
        'settings',
        'thumbs-up',
        'left',
        'right',
        'loading',
        'arrow-up',
        'info-solid',
        'info-empty',
        'error-solid',
        'error-empty',
        'warning',
        'meowney',
        'delete',
        'deleteTag',
        'deleteIcon',
        'clear',
        'hook',
        'hook-yes',
        'ok',
        'ok-circle',
        'empty-record',
        'kalendar',
        'economicCalendar',
        'rili1',
        'blank-calendar',
        'edit',
        'edit1',
        'incomeOutcome',
        'design-rule-1',
        'design-rule-2',
        'gear-blue',
        'gear-green',
        'vue',
        'ui',
        'ts',
        'vueel',
        'github',
        'share',
        'search',
        'link',
        'helm',
        'rudder',
        'puzzle1'
      ];

      /*
      // 使用message/toast组件代替
      (!val)
        ? console.warn(`Invalid prop: prop "name" is required.`)
        : (!iconsNames.includes(val))
          ? console.log(`Invalid prop: prop "name" is referring to an unregistered icon "${val}".
                         Please make sure you have imported this icon before using it.`)
          : null;
      */
      return iconsNames.includes(val);
    }
  },
  scale: {
    type: Number,
    default: 1,
    validator(val: number) {
      return (val >= 1 && val <= 10);
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
const {scale, flip, spin, inverse, pulse} = toRefs(props) || {};

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
         :class="{
                iconClass: true,
                customClass: true
                },
                iconScale"
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

<style lang="scss">
@import 'styles/animate';

.vue-icon-wrapper {
  vertical-align: sub;
  line-height: 1em;
  width: 1em;
  height: 1em;

  .vue-icon-svg {
    vertical-align: top;
    width: 1em;
    height: 1em;
  }

}

@for $i from 2 through 10 {
  .vue-icon-#{$i}x {
    transform: scale($i);
  }
}

</style>
