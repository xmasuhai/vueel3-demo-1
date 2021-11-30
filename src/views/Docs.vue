<script setup lang="ts">
import {ref} from 'vue';
import {onBeforeRouteUpdate} from 'vue-router';
import TopNav from '@/components/TopNav.vue';
import AsideMenu from '@/components/aside/AsideMenu.vue';

// ref模板引用 https://v3.cn.vuejs.org/guide/composition-api-template-refs.html
const mainDoc = ref(null);

const mainDocBackTop = () => {
  // mainDoc get value after onMounted
  (mainDoc.value as unknown as HTMLElement).scrollTop = 0;
};

// 每次路由跳转前，都滚动到顶部
onBeforeRouteUpdate((/*to, from*/) => {
  mainDocBackTop();
});

</script>

<template>
  <div class="layout">
    <top-nav class="nav" menuBtnVisible></top-nav>
    <div class="content">
      <AsideMenu></AsideMenu>
      <main ref="mainDoc">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Docs'
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    background-color: #fff;
    flex-shrink: 0;
    height: 5vh;
    z-index: 101;
    box-shadow: 0 1px 1px rgba(183, 233, 230, 50);
  }

  > .content {
    height: 95vh;
    display: flex;
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;

    @media screen and(max-width: 768px) {
      padding-left: 0;
    }

    > main {
      flex-grow: 1;
      padding: 16px;
      background: white;
      overflow: auto;
    }

  }

}

</style>
