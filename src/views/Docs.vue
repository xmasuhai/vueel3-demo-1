<template>
  <top-nav></top-nav>
  <div class="content">
    <aside v-if="asideVisible">
      <h2>组件列表</h2>
      <ol>
        <li>
          <router-link to="/docs/switch">Switch 组件</router-link>
        </li>
        <li>
          <router-link to="/docs/button">Button 组件</router-link>
        </li>
        <li>
          <router-link to="/docs/dialog">Dialog 组件</router-link>
        </li>
        <li>
          <router-link to="/docs/tabs">Tabs 组件</router-link>
        </li>
      </ol>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import {inject, Ref} from 'vue';

let asideVisible = inject<Ref<boolean>>('asideVisible');
</script>

<script lang="ts">
import TopNav from '@/components/TopNav.vue';

export default {
  name: 'Docs',
  components: {TopNav}
};
</script>

<style lang="scss" scoped>
aside {
  background: cornflowerblue;
  width: 150px;
  padding: 70px 16px 16px;
  position: fixed;
  top: 0;
  left: 0;

  > h2 {
    margin-bottom: 4px;
  }

  > ol {
    > li {
      padding: 4px 0;
    }
  }

  @media (max-width: 500px) {
    position: fixed;
    top: 0;
    left: 0;

  }
}
</style>
