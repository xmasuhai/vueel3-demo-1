<demo>点击遮罩层不执行关闭逻辑</demo>
<script lang="ts">
export default {
  name: 'Dialog2Demo',
  __sourceCode: '',
  __sourceCodeTitle: ''
};

</script>

<template>
  <VueButton @click="toggle">toggle</VueButton>
  <VueDialog v-model:visible="visible"
             :closeOnClickOverlay="false">
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
</script>
