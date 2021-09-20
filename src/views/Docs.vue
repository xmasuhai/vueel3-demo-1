<template>
  <div class="layout">
    <top-nav class="nav"></top-nav>
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
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
  }

  > .content {
    display: flex;
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }

    > aside {
      flex-shrink: 0;
      position: fixed;
      top: 0;
      left: 0;
      background: cornflowerblue;
      width: 150px;
      padding: 70px 16px 16px;

      > h2 {
        margin-bottom: 4px;
      }

      > ol {
        > li {
          padding: 4px 0;
        }
      }
    }

    > main {
      flex-grow: 1;
      padding: 16px;
      background: lightgreen;
      overflow: auto;
    }
  }

}

</style>
