<template>
  Switch 的文档
  <p v-for="item in mockDataP()" key="item.id">Switch 的 {{ item.id }}文档</p>
</template>

<script setup lang="ts">
const mockDataP = () => {
  const mockData = [];
  for (let i = 0; i < 100; i++) {
    mockData.push({id: i});
  }
  return mockData;
};
</script>
