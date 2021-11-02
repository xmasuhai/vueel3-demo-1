<demo>使用Hooks打开 Dialog</demo>
<script lang="ts">
export default {
  name: 'Dialog4Demo',
  __sourceCode: '',
  __sourceCodeTitle: ''
};

</script>

<template>
  <VueButton @click="dialogHook">toggle</VueButton>
</template>

<script setup lang="ts">
import VueButton from '@/lib/Button.vue'
import {useDialog} from '@/lib/hooks/useDialog';

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
