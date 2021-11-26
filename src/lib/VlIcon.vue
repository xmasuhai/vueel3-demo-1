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
  fill: String,
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
    'vl-icon': true,
    'vl-icon-spin': spin,
    'vl-icon-flip-horizontal': flip.value === 'horizontal',
    'vl-icon-flip-vertical': flip.value === 'vertical',
    'vl-icon-inverse': inverse,
    'vl-icon-pulse': pulse
  };
});

const iconScale = computed(() => {
  return {
    [`vl-icon-${scale.value}x`]: true
  };
});
</script>

<template>
  <span class="vl-icon-wrapper">
    <svg class="vl-icon-svg"
         :class="{
                iconClass: true,
                customClass: true
                },
                iconScale"
         :fill="fill"
         aria-hidden="true">
      <use :xlink:href="`#icon-${iconName}`">
      </use>
    </svg>
    <slot></slot>
  </span>
</template>

<script lang="ts">
export default {
  name: 'VlIcon'
};
</script>

<style lang="scss">
@import 'styles/animate';
@import 'styles/mixins.scss';

// namespace: 'vl'
// .vl-icon
@include bem(icon) {
  &-wrapper {
    vertical-align: sub;
    line-height: 1em;
    width: 1em;
    height: 1em;
  }

  &-svg {
    vertical-align: top;
    width: 1em;
    height: 1em;
  }

}

@for $i from 2 through 10 {
  .vl-icon-#{$i}x {
    transform: scale($i);
  }
}

</style>
