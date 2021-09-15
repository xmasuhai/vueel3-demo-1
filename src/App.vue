<script setup lang="ts">
import {provide, ref} from 'vue';

const asideVisible = ref(false);
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
