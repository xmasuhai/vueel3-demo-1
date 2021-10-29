<demo>常规用法 点击遮罩层关闭</demo>
<script lang="ts">
export default {
  name: 'Dialog1Demo',
  __sourceCode: '',
  __sourceCodeTitle: ''
};

</script>

<template>
  <VueButton @click="toggle">toggle</VueButton>
  <VueDialog v-model:visible="visible"
             :closeOnClickOverlay="true">
  </VueDialog>
</template>

<script setup lang="ts">
import VueButton from '@/lib/Button.vue';
import VueDialog from '@/lib/Dialog.vue';
import {ref} from 'vue';

const visible = ref(false);
const toggle = () => {
  visible.value = !visible.value;
};

</script>
