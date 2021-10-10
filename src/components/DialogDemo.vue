<script setup lang="ts">
import {ref} from 'vue';
import Button from '@/lib/Button.vue';
import Dialog from '@/lib/Dialog.vue';

const x = ref(false);
const toggle = () => {
  x.value = !x.value;
};

// 指定ok cancel的回调
const fn1 = () => {
  console.log(1);
  return false;
};
const fn2 = () => {
  console.log(2);
};

</script>

<template>
  <h1>Dialog 示例</h1>
  <h2>示例一</h2>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="true"></Dialog>
  <h2>示例二 点击遮罩层不执行关闭逻辑</h2>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="false"></Dialog>
  <h2>示例三 点击ok cancel 预定义回调</h2>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x"
          :ok="fn1" :cancel="fn2"></Dialog>
</template>

<script lang="ts">
export default {
  name: 'DialogDemo'
};
</script>
