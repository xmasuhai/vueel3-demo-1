<script setup lang="ts">
import {/*computed,*/ onMounted, ref, useSlots, VNode} from 'vue';
import TabItem from '@/lib/TabItem.vue';
// 获取slots
let defaults: VNode[];
const slots = useSlots();
defaults = [...(slots.default as Function)()];

// 检查子标签名方法
const checkTabItem = () => {
  defaults.forEach((tag: VNode) => {
    if (tag.type !== TabItem) {
      console.error(new Error('Tabs 子标签必须是 TabItem'));
    }
  });
};

// 获取VNode中对应title数组 titles: string[]
const titles = defaults?.map((tag: VNode) => {
  return tag?.props?.title;
});

// 声明外部数据 获取 props.selected
const props = defineProps({
  selected: String
});

/*
// 对比所有项目的title和当前选中项的title 获取当前选中项currentTab
const currentTab = computed(() => {
  return defaults?.filter((tag: VNode) => {
    return tag?.props?.title === props.selected;
  })[0];
});

const currentTitle = computed(() => {
  return defaults.find((tag: VNode) => {
    return tag!.props!.title === props.selected;
  })!.props!.title;
});
*/

// 声明外部数据 获取 props.selected
const emits = defineEmits(['update:selected']);
// 点击选中项目时执行的方法 通知父组件当前的选中项
const select = (title: string) => {
  emits('update:selected', title);
};

// 获取导航标签项目引用
const navItems = ref<HTMLDivElement[]>([]);
// 获取导航标签指示横线引用
const indicator = ref<HTMLDivElement>(null);

// 获取导航项目列表数组
const xxx = () => {
  // 获取导航项目列表数组
  const divs = navItems.value;
  // const result = divs.filter(div => div.classList.contains('selected'))[0];
  const result = divs.find(div => div.classList.contains('selected'));
  const {width} = result.getBoundingClientRect();
  indicator.value.style.width = `${width}px`;
};

onMounted(() => {
  checkTabItem();
  xxx();
});

</script>

<template>
  <div class="vue-tabs">
    <div class="vue-tabs-nav">
      <div class="vue-tabs-nav-item"
           v-for="(title, index) in titles"
           :key="index"
           @click="select(title)"
           :class="{selected: title === selected}"
           :ref="el => { if (el) navItems[index] = el }">
        {{ title }}
      </div>
      <div class="vue-tabs-nav-indicator"
           ref="indicator">
      </div>
    </div>
    <div class="vue-tabs-content">
      <keep-alive>
        <component v-for="comp in defaults"
                   :is="comp"
                   class="vue-tabs-content-item"
                   :class="{selected: comp.props.title === selected}">
        </component>
      </keep-alive>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Tabs'
};
</script>

<style lang="scss">
$blue-underscore: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.vue-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue-underscore;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background-color: $blue-underscore;
      left: 0;
      bottom: -1px;
      width: 100px;
    }

  }

  &-content {
    padding: 8px 0;

    &-item {
      display: none;

      &.selected {
        display: block;
      }
    }
  }
}
</style>
