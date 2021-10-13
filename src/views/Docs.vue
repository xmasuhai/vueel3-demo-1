<template>
  <div class="layout">
    <top-nav class="nav" menuBtnVisible></top-nav>
    <div class="content">
      <transition name="aside">
        <aside v-if="asideVisible">
          <header>
            <h2>
              <router-link to="/docs"
                           class="alink">组件列表
              </router-link>
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
      background: deepskyblue;
      width: 150px;
      padding: 55px 0 16px;
      height: 100vh;
      color: white;
      z-index: 1;

      > header {
        margin-bottom: 4px;
        line-height: 50px;
        padding-left: 16px;
        user-select: none;
        border-bottom: 1px solid #000;
      }

      > ol {
        display: flex;
        flex-direction: column;

        > li {
          > h3 {
            padding-left: 16px;
            display: block;
            line-height: 45px;
            transition: .25s;

            &:hover {
              padding-left: 20px;
              transform: translate3D(5px, 0, 0);
            }

            .router-link {
              display: block;
              height: 100%;
              width: 100%;
            }
          }

          &::before {
            content: '';
            display: block;
            width: 100%;
            border-top: 1px solid rgba(255, 255, 255, .1);
          }

          &::after {
            content: '';
            display: block;
            width: 100%;
            border-bottom: 1px solid #000;
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
