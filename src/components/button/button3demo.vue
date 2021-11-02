<demo>图标按钮</demo>
<script lang="ts">
export default {
  name: 'Button3Demo',
  __sourceCode: '',
  __sourceCodeTitle: ''
};
</script>

<template>
  <VueButton shape="circle"><VueIcon iconName="search"></VueIcon></VueButton>
  <VueButton shape="circle"><VueIcon iconName="delete"></VueIcon></VueButton>
  <VueButton shape="circle"><VueIcon iconName="edit"></VueIcon></VueButton>
  <VueButton shape="circle"><VueIcon iconName="share"></VueIcon></VueButton>
  <VueButton shape="capsule"><VueIcon iconName="search"></VueIcon>搜索</VueButton>
  <VueButton shape="capsule"><VueIcon iconName="delete"></VueIcon>删除</VueButton>
  <VueButton shape="capsule"><VueIcon iconName="edit"></VueIcon>编辑</VueButton>
  <VueButton shape="capsule"><VueIcon iconName="share"></VueIcon>分享</VueButton>
</template>

<script setup lang="ts">
import VueButton from '@/lib/Button.vue';
import VueIcon from '@/lib/Icon.vue';
</script>
