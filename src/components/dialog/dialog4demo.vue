<demo>防止被遮盖</demo>
<script lang="ts">
export default {
  name: 'Dialog4Demo',
  __sourceCode: '',
  __sourceCodeTitle: ''
};

</script>

<template>
  <div style="position: relative; z-index: 1;">
    <VueButton @click="dialogHook">toggle</VueButton>
    <VueDialog v-model:visible="visible">
      <template v-slot:title>
        <strong>使用Teleport</strong>
      </template>
      <template v-slot:content>
        <div>原来外层的div的z-index为1</div>
        <div>Teleport将Dialog放到 body关闭标签 之前</div>
      </template>
    </VueDialog>
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
</template>

<script setup lang="ts">
import VueButton from '@/lib/Button.vue';
import VueDialog from '@/lib/Dialog.vue';
import {useDialog} from '@/hooks/useDialog';
import {ref} from 'vue';

const visible = ref(false);
const dialogHook = () => {
  useDialog({
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

</script>
