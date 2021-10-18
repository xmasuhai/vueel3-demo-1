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
            <li>
              <h3>
                <router-link class="router-link" to="/docs/intro">介绍</router-link>
              </h3>
            </li>
            <li>
              <h3>
                <router-link class="router-link" to="/docs/install">安装</router-link>
              </h3>
            </li>
            <li>
              <h3>
                <router-link class="router-link" to="/docs/get-started">开始使用</router-link>
              </h3>
            </li>
          </ol>
          <header>
            <h2>
              组件列表
            </h2>
          </header>
          <ol>
            <li>
              <h3>
                <router-link to="/docs/switch"
                             class="router-link">
                  Switch 组件
                </router-link>
              </h3>
            </li>
            <li>
              <h3>
                <router-link to="/docs/button"
                             class="router-link">
                  Button 组件
                </router-link>
              </h3>
            </li>
            <li>
              <h3>
                <router-link to="/docs/dialog"
                             class="router-link">
                  Dialog 组件
                </router-link>
              </h3>
            </li>
            <li>
              <h3>
                <router-link to="/docs/tabs"
                             class="router-link">
                  Tabs 组件
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
    height: 5vh;
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
      z-index: 1;

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
