<script setup lang="ts">
import {onBeforeUpdate, computed, onMounted, ref, VNode, watchEffect, Ref} from 'vue';
import TabItem from './TabItem.vue';
import {useGetSlots} from './hooks/useGetSlots';
import {useCheckSlots} from './hooks/useCheckSlots';

// 获取slotsDefaults
const {defaults} = useGetSlots();

// 检查子标签名方法hooks: useCheckSlots
/*
const checkTabItem = () => {
  defaults.forEach((tag: VNode) => {
    if (tag.type !== TabItem) {
      console.error(new Error('Tabs 子标签必须是 TabItem'));
    }
  });
};
*/
const checkTabItem = useCheckSlots.bind(null, defaults, TabItem);

// 获取子组件VNode中对应title属性组成的数组 titles: string[]
const titles = defaults?.map((tag: VNode) => {
  return tag?.props?.title;
});

// 声明外部数据 获取 props.selected 属性
const props = defineProps({
  selected: String
});

// 对比所有项目的title和当前选中项的title 获取当前选中项currentTab
// filter 性能不如 find，改用find
/*
const getCurrentTab = computed(() => {
  return defaults?.filter((tag: VNode) => {
    return tag?.props?.title === props.selected;
  })[0];
});
*/
const getCurrentTab = computed(() => {
  return defaults.find((tag: VNode) => {
    return tag?.props?.title === props.selected;
  });
});

const getCurrentTitle = computed(() => {
  return defaults.find((tag: VNode) => {
    return tag?.props?.title === props.selected;
  })!.props!.title;
});

// 声明 发布方法名
const emits = defineEmits(['update:selected']);

// 点击选中项目时执行的方法 通知父组件当前的选中项
const select = (title: string) => {
  emits('update:selected', title);
};

// 获取导航标签项目引用
const div = document.createElement('div');
let selectedItem: Ref = ref<HTMLDivElement>(div);
// 获取导航标签指示横线引用
const indicator = ref<HTMLDivElement>(div);
// 获取导航外部div引用
const container = ref<HTMLDivElement>(div);

// 确保在每次更新之前重置ref
onBeforeUpdate(() => {
  selectedItem.value = div;
});

onMounted(() => {
  checkTabItem();
});

const indicatorTraceTab = () => {
  const {width, left} = selectedItem.value!.getBoundingClientRect();
  const {left: containerLeft} = container.value!.getBoundingClientRect();
  const leftPos = left - containerLeft;
  indicator.value!.style.width = `${width}px`;
  indicator.value!.style.transform = `translate3D(${leftPos}px, 0, 0)`;
};

// 追踪 变更，执行回调
watchEffect(() => {
  indicatorTraceTab();
});

</script>

<template>
  <div class="vue-tabs">
    <nav class="vue-tabs-nav" ref="container">
      <div v-for="(title, index) in titles"
           :key="index"
           :ref="(el) => { if (el && (title === selected)) selectedItem = el }"
           :class="{selected: title === selected}"
           class="vue-tabs-nav-item"
           @click="select(title)">
        {{ title }}
      </div>
      <div class="vue-tabs-nav-indicator"
           ref="indicator">
      </div>
    </nav>
    <div class="vue-tabs-content">
      <keep-alive>
        <component :is="getCurrentTab"
                   :key="getCurrentTitle"
                   class="vue-tabs-content-item">
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
@import 'styles/var';

.vue-tabs {
  &-nav {
    display: flex;
    color: $tab-color;
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
      transition: all .25s;
    }

  }

  &-content {
    padding: 8px 0;
  }
}
</style>
