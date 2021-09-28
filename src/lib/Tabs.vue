<script setup lang="ts">
import {useAttrs, useSlots} from 'vue';

let defaults;
// 获取slots
const slots = useSlots();
if (slots.default) {
  defaults = [...slots.default()];
}

const titles = defaults?.map((tag) => {
  return tag?.props?.title;
});

// 获取attrs
const attrs = useAttrs();

// 获取 emit
const emit = defineEmits(['change', 'close']);
emit('change', 'change事件的payload');
emit('close', 'close事件的payload');

// 获取expose
const a = 1;
const b = 2;
defineExpose({
  a,
  b,
});
</script>

<template>
  <div>
    <div v-for="(title, index) in titles"
         :key="index">
      {{ title }}
    </div>
    <component v-for="(comp, index) in defaults"
               :is="comp"
               :key="index">
    </component>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Tabs'
};
</script>
