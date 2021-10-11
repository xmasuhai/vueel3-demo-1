<script setup lang="ts">
import {ref} from 'vue';
import Button from '@/lib/Button.vue';
import Dialog from '@/lib/Dialog.vue';

const isDialogVisible = ref(false);
const toggle = () => {
  isDialogVisible.value = !isDialogVisible.value;
};

// 指定ok cancel的回调
const fn1 = () => {
  return false;
};
const fn2 = () => {
};

</script>

<template>
  <h1>Dialog 示例</h1>
  <h2>示例一</h2>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="isDialogVisible" :closeOnClickOverlay="true"></Dialog>
  <h2>示例二 点击遮罩层不执行关闭逻辑</h2>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="isDialogVisible" :closeOnClickOverlay="false"></Dialog>
  <h2>示例三 点击ok cancel 预定义回调</h2>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="isDialogVisible"
          :ok="fn1" :cancel="fn2">
    <template v-slot:title>
      <strong>粗体的标题</strong>
    </template>
    <template v-slot:content>
      <div>自定义内容</div>
      <div>自定义内容</div>
    </template>
  </Dialog>
</template>

<script lang="ts">
export default {
  name: 'DialogDemo'
};
</script>
