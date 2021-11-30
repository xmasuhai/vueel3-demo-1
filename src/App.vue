<script setup lang="ts">
import useEmitter from '@/lib/hooks/useEmitter';
import fitScreenSize from '@/utils/fitScreenSize';
import {provide, ref} from 'vue';
import {router} from '@/router';

const width = document.documentElement.clientWidth;
const asideVisible = ref(width > 500);
provide('asideVisible', asideVisible);

const emitter = useEmitter();
provide('evBus', emitter);

router.afterEach(() => {
  fitScreenSize()
});

</script>

<script lang="ts">
export default {
  name: 'App'
};
</script>

<template>
  <router-view></router-view>
</template>
