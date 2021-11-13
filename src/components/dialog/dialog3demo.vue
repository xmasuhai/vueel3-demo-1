<demo>点击ok cancel 预定义回调</demo>
<script lang="ts">
export default {
  name: 'Dialog3Demo',
  __sourceCode: '',
  __sourceCodeTitle: ''
};

</script>

<template>
  <VueButton @click="toggle">toggle</VueButton>
  <VueDialog v-model:visible="visible"
             :ok="fn1" :cancel="fn2">
    <template v-slot:title>
      <strong>粗体的标题</strong>
    </template>
    <template v-slot:content>
      <div>自定义内容</div>
      <div>自定义内容</div>
    </template>
  </VueDialog>
</template>

<script setup lang="ts">
import VueButton from '@/lib/VlButton.vue';
import VueDialog from '@/lib/VlDialog.vue';
import {ref} from 'vue';

const visible = ref(false);
const toggle = () => {
  visible.value = !visible.value;
};

// 指定ok cancel的回调
const fn1 = (result = true) => {
  alert('ok');
  return result;
};
const fn2 = (result = true) => {
  alert('cancel');
  return result;
};

</script>
