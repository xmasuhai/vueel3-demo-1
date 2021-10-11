<script setup lang="ts">
import {ref} from 'vue';
import Button from '@/lib/Button.vue';
import Dialog from '@/lib/Dialog.vue';
import {openDialog} from '@/hooks/openDialog';

const [
  isDialogVisible1,
  isDialogVisible2,
  isDialogVisible3,
  isDialogVisible4,
] = [
  ref(false),
  ref(false),
  ref(false),
  ref(false)
];

const toggle1 = () => {
  isDialogVisible1.value = !isDialogVisible1.value;
};
const toggle2 = () => {
  isDialogVisible2.value = !isDialogVisible2.value;
};
const toggle3 = () => {
  isDialogVisible3.value = !isDialogVisible3.value;
};
const toggle4 = () => {
  isDialogVisible4.value = !isDialogVisible4.value;
};

const dialogHook = () => {
  openDialog({
    title: '一个标题',
    content: '一段内容',
    ok() {
      console.log('ok');
    },
    cancel() {
      console.log('cancel');
    },
  });
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
  <Button @click="toggle1">toggle</Button>
  <Dialog v-model:visible="isDialogVisible1"
          :closeOnClickOverlay="true"></Dialog>
  <h2>示例二 点击遮罩层不执行关闭逻辑</h2>
  <Button @click="toggle2">toggle</Button>
  <Dialog v-model:visible="isDialogVisible2"
          :closeOnClickOverlay="false"></Dialog>
  <h2>示例三 点击ok cancel 预定义回调</h2>
  <Button @click="toggle3">toggle</Button>
  <Dialog v-model:visible="isDialogVisible3"
          :ok="fn1" :cancel="fn2">
    <template v-slot:title>
      <strong>粗体的标题</strong>
    </template>
    <template v-slot:content>
      <div>自定义内容</div>
      <div>自定义内容</div>
    </template>
  </Dialog>
  <h2>示例四 防止被遮盖</h2>
  <Button @click="toggle4">toggle</Button>
  <div style="position: relative; z-index: 1;">
    <Dialog v-model:visible="isDialogVisible4">
      <template v-slot:title>
        <strong>使用Teleport</strong>
      </template>
      <template v-slot:content>
        <div>原来外层的div的z-index为1</div>
        <div>Teleport将Dialog放到 body关闭标签 之前</div>
      </template>
    </Dialog>
  </div>
  <div style="position: relative;
              z-index: 2;
              width: 300px;
              height: 300px;
              left: 50%;
              transform: translateX(-50%);
              background: orange;">
    z-index: 2; 层叠上下文 比较同一级父级的 z-index
  </div>
  <h2>示例五 一行代码打开 Dialog</h2>
  <Button @click="dialogHook">toggle</Button>
</template>

<script lang="ts">
export default {
  name: 'DialogDemo'
};
</script>
