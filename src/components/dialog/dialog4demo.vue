<demo>防止被遮盖</demo>
<script lang="ts">
export default {
  name: 'Dialog4Demo',
  __sourceCode: '',
  __sourceCodeTitle: ''
};

</script>

<template>
  <div>
    <VueButton @click="toggle1">toggle z-index 1</VueButton>
    <VueDialog v-model:visible="visible1" :zIndexLevel="1">
      <template v-slot:title>
        <strong>使用Teleport</strong>
      </template>
      <template v-slot:content>
        <div>原外层 div 的z-index 为 1</div>
        <div>Teleport 将 Dialog 放到 body 关闭标签 之前</div>
      </template>
    </VueDialog>
    <br/>
    <br/>
    <VueButton @click="toggle10">toggle z-index 10</VueButton>
    <VueDialog v-model:visible="visible10" :zIndexLevel="10">
      <template v-slot:title>
        <strong>使用Teleport</strong>
      </template>
      <template v-slot:content>
        <div>原外层 div 的z-index 为 10</div>
        <div>Teleport 将 Dialog 放到 body 关闭标签 之前</div>
      </template>
    </VueDialog>
    <br/>
    <br/>
    <VueButton @click="toggle100">toggle z-index 100</VueButton>
    <VueDialog v-model:visible="visible100" :zIndexLevel="100">
      <template v-slot:title>
        <strong>使用Teleport</strong>
      </template>
      <template v-slot:content>
        <div>原外层 div 的z-index 为 100</div>
        <div>Teleport 将 Dialog 放到 body 关闭标签 之前</div>
      </template>
    </VueDialog>
    <br/>
    <br/>
  </div>

  <!-- 以下为演示的遮盖元素 -->
  <div style="display: flex; justify-content: center; z-index: 20">
    <div v-for="{zIndex} in [{zIndex: 20}, {zIndex: 10}, {zIndex: 1}]"
         :style="
            { position: 'relative',
              zIndex: zIndex,
              width: '120px',
              height: '240px',
              padding: '16px',
              margin: '2px',
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: 'rgba(89, 89, 89, 0.2)',
              backdropFilter: 'blur(11px)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              boxShadow: 'rgba(14, 14, 14, 0.19) 0 6px 15px 0',
              borderRadius: '16px',
              color: 'rgba(128, 128, 128, 0.8)',
              color: 'black'}
          ">
      <span v-text="`z-index: ${zIndex}; 层叠上下文 比较同一级父级元素的z-index属性`"></span>
    </div>
  </div>
  <!-- 以上为演示的遮盖元素 -->

</template>

<script setup lang="ts">
import VueButton from '@/lib/Button.vue';
import VueDialog from '@/lib/Dialog.vue';
import {ref} from 'vue';

const visible1 = ref(false);
const visible10 = ref(false);
const visible100 = ref(false);

const toggle1 = () => {
  visible1.value = !visible1.value;
};
const toggle10 = () => {
  visible10.value = !visible10.value;
};
const toggle100 = () => {
  visible100.value = !visible100.value;
};

</script>
