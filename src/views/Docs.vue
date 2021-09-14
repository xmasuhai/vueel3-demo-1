<template>
  <top-nav></top-nav>
  <div class="content">
    <aside>边栏</aside>
    <main>内容</main>
  </div>
</template>

<script lang="ts">
import TopNav from '@/components/TopNav.vue';

export default {
  name: 'Docs',
  components: {TopNav}
};
</script>

<style lang="scss" scoped>

</style>
