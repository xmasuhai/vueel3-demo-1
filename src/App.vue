<script setup lang="ts">
import {provide, ref} from 'vue';

const width = document.documentElement.clientWidth;
const asideVisible = ref(width > 500);
provide('asideVisible', asideVisible);
</script>
<script lang="ts">
export default {
  name: 'App'
};
</script>
<template>
  <router-view></router-view>
</template>
