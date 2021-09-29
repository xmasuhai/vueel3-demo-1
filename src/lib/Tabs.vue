<script setup lang="ts">
import {useSlots} from 'vue';

let defaults;
// 获取slots
const slots = useSlots();
if (slots.default) {
  defaults = [...slots.default()];
}

const titles = defaults?.map((tag) => {
  return tag?.props?.title;
});

</script>

<template>
  <div class="vue-tabs">
    <div class="vue-tabs-nav">
      <div v-for="(title, index) in titles"
           :key="index"
           class="vue-tabs-nav-item">
        {{ title }}
      </div>
    </div>
    <div class="vue-tabs-content">
      <component v-for="(comp, index) in defaults"
                 :is="comp"
                 :key="index"
                 class="vue-tabs-content-item">
      </component>
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
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
