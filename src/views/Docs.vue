<script setup lang="ts">
import TopNav from '@/components/TopNav.vue';
import {inject, Ref} from 'vue';

let asideVisible = inject<Ref<boolean>>('asideVisible');
const emmiter = inject<any>('evBus');

const closeAside = () => {
  emmiter.on('update:asideVisible', () => {
    asideVisible!.value = false;
  });
};

const routerInfo = [
  {
    toPath: 'intro',
    textInfo: '介绍'
  },
  {
    toPath: 'install',
    textInfo: '安装'
  },
  {
    toPath: 'get-started',
    textInfo: '开始使用'
  }
];

const compInfo = [
  {
    toPath: 'switch',
    textInfo: 'Switch 组件'
  },
  {
    toPath: 'button',
    textInfo: 'Button 组件'
  },
  {
    toPath: 'dialog',
    textInfo: 'Dialog 组件'
  },
  {
    toPath: 'tabs',
    textInfo: 'Tabs 组件'
  },
  {
    toPath: 'icons',
    textInfo: 'Icons 组件'
  },
  {
    toPath: 'collapse',
    textInfo: 'Collapse 组件'
  },
];

</script>

<template>
  <div class="layout">
    <top-nav class="nav" menuBtnVisible></top-nav>
    <div class="content">
      <transition name="aside">
        <aside v-if="asideVisible">
          <header>
            <h2>
              <router-link class="alink" to="/docs">文档</router-link>
            </h2>
          </header>
          <ol>
            <li v-for="{toPath, textInfo} of routerInfo">
              <h3>
                <router-link class="router-link"
                             :to="`/docs/${toPath}`"
                             @click="closeAside">
                  {{ textInfo }}
                </router-link>
              </h3>
            </li>
          </ol>
          <header>
            <h2>
              组件列表
            </h2>
          </header>
          <ol>
            <li v-for="{toPath, textInfo} of compInfo">
              <h3>
                <router-link :to="`/docs/${toPath}`"
                             class="router-link"
                             @click="closeAside">
                  {{ textInfo }}
                </router-link>
              </h3>
            </li>
          </ol>
        </aside>
      </transition>
      <main>
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

    > aside {
      flex-shrink: 0;
      position: fixed;
      top: 0;
      left: 0;
      background: linear-gradient(
          145deg,
          rgba(183, 233, 230, 50) 100%,
          rgba(227, 255, 253, 1) 0%);
      width: 150px;
      padding: 60px 0 16px;
      height: 100vh;
      color: black;
      z-index: 100;

      > header {
        > h2 {
          margin-bottom: 4px;
          line-height: 50px;
          padding: 0 16px;
          user-select: none;
        }
      }

      > ol {
        display: flex;
        flex-direction: column;

        > li {
          > h3 {
            display: block;
            line-height: 25px;
            transition: .25s;
            padding-left: -16px;

            &:hover {
              transform: translate3D(4px, 0, 0);
            }

            .router-link {
              display: block;
              height: 100%;
              width: 100%;
              padding: 4px 16px;
            }

            .router-link-active {
              background-color: white;
              padding-left: -4px;
            }

          }

        }
      }

    }

    > main {
      flex-grow: 1;
      padding: 16px;
      background: white;
      overflow: auto;
    }

    .aside-enter-active,
    .aside-leave-active {
      transition: all 0.25s ease;
    }

    .aside-enter-from,
    .aside-leave-to {
      opacity: 0;
      transform: translate3D(-100%, 0, 0);
    }
  }

}

</style>
