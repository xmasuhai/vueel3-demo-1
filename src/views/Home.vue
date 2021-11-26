<script setup lang="ts">
import FeatureItem from '@/components/FeatureItem.vue';
import TopNav from '@/components/TopNav.vue';
import Waves from '@/components/Waves.vue';
import VlButton from '@/lib/VlButton.vue';
import VlIcon from '@/lib/VlIcon.vue';
import {ref} from 'vue';

const ua = navigator.userAgent.toLowerCase();
const showWaves = ref(true);
if (/qq/.test(ua)) {
  showWaves.value = false;
}
</script>

<template>
  <div class="wrapper">
    <div class="topNavAndBanner">
      <top-nav class="nav"></top-nav>
      <div class="banner">
        <h1>Vueel 3 UI</h1>
        <h2>一个基于 Vue 3 的UI组件库</h2>
        <div class="skip">
          <VlButton class="actions"
                    shape="capsule">
            <VlIcon iconName="github"></VlIcon>
            <a href="https://github.com/xmasuhai/vueel3-demo-1"
               target="_blank">
              GitHub
            </a>
          </VlButton>
          <VlButton class="actions get-started"
                    shape="capsule">
            <router-link to="/docs">开始</router-link>
          </VlButton>
        </div>
      </div>
    </div>
    <div class="features">
      <ul>
        <FeatureItem iconName="vue"
                     title="基于Vue 3.2">
          <p>
            使用 <strong>Composition API</strong> 和
            <br/>
            <strong> &lt; script setup &gt; 语法糖</strong>
            <br/>
            <span>每个组件代码简洁、易读、严谨</span>
          </p>
        </FeatureItem>
        <FeatureItem iconName="ts"
                     title="基于 TypeScript">

          <p>源代码采用TypeScript</p>
        </FeatureItem>
        <FeatureItem iconName="vite"
                     title="使用Vite 2 开发、构建">

          <p>秒级运行、快速开发</p>
        </FeatureItem>
      </ul>
    </div>
    <Waves class="waves" v-if="showWaves"></Waves>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Home'
};
</script>

<style lang="scss" scoped>
@use "sass:math";
@import '../lib/styles/var';

.wrapper {
  display: flex;
  flex-direction: column;

  .topNavAndBanner {
    background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%,
        rgba(183, 233, 230, 50) 100%);
    display: flex;
    flex-direction: column;
    clip-path: ellipse(80% 60% at 50% 40%);

    .nav {
      height: 5vh;

      &:deep(.toggleAside) {
        display: none;
      }
    }

    .banner {
      display: flex;
      flex-grow: 1;
      height: 30vh;
      padding: 100px 0;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      > h1,
      h2 {
        background: linear-gradient(to left, rgb(112, 101, 214), rgb(230, 106, 213));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: bold;
        color: transparent;
      }

      .skip {
        transform: translateY(18px);
        display: flex;
        justify-content: center;
        align-items: center;

        .actions {
          position: relative;
          background: #f6f6f6;

          &:deep(.vl-icon-wrapper) {
            position: absolute;
            left: 6px;
            pointer-events: none;

            > svg {
              fill: #7f8c8d;
            }
          }

          &:first-child {
            padding-left: 24px;
          }

          a {
            user-select: none;
            padding: 8px 0;
            color: #4f5959;
            display: inline-block;
            border-radius: 24px;
          }

        }

        .get-started {
          border-color: #42b983;
          border-width: 1.8px;

          > a {
            color: #42b983;

          }
        }

      }

    }
  }

  .features {
    margin: 64px auto;
    padding: 0 16px;

    > ul {
      display: flex;
      flex-wrap: wrap;

      &:deep(.feature-item) {
        // inside slot
        strong {
          color: rgb(255, 140, 0);
          font-weight: bold;
        }

        > h3 {
          grid-area: title;
          font-size: 28px;
        }

        > p {
          grid-area: text;

        }
      }

    }
  }

  @media (max-width: 800px) {
    > ul {
      width: 100%;
      flex-wrap: nowrap;

      > li {
        width: 100%;
      }
    }
  }

  @media (min-width: 800px) {
    > ul {
      width: 800px;

      > li {
        width: 50%;
      }
    }
  }

  @media (min-width: 1200px) {
    > ul {
      width: 1200px;

      > li {
        width: 30%;
      }
    }
  }

  .waves {
    position: fixed;
    bottom: -20px;
    left: 0;
    width: 100%;
  }

}

</style>
