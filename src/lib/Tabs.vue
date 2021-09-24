<script setup lang="ts">
import {useAttrs, useSlots, defineEmits} from 'vue';
// 获取slots
const slots = useSlots();
console.log('slots.default(): ', slots.default());
// console.log('context', context);

// 获取attrs
const attrs = useAttrs();
console.log('attrs: ', attrs);

// 获取 emit
const emit = defineEmits(['change', 'close']);
emit('change', 'change事件的payload');
emit('close', 'close事件的payload');

// 获取expose
const a = 1;
const b = 2;
defineExpose({
  a,
  b
});
</script>

<template>
  Tabs
</template>

<script lang="ts">
export default {
  name: 'Tabs'
};
</script>

<style lang="scss" scoped>

</style>
