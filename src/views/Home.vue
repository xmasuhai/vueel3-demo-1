<script setup lang="ts">
import TopNav from '@/components/TopNav.vue';
import Waves from '@/components/waves.vue';
import VueButton from '@/lib/Button.vue';
import VueIcon from '@/lib/Icon.vue';
</script>

<template>
  <div class="wrapper">
    <div class="topNavAndBanner">
      <top-nav class="nav"></top-nav>
      <div class="banner">
        <h1>Vueel 3 UI</h1>
        <h2>一个基于 Vue 3 的UI组件库</h2>
        <div class="skip">
          <vue-button class="actions"
                      shape="capsule">
            <VueIcon iconName="github"></VueIcon>
            <a href="https://github.com/xmasuhai/vueel3-demo-1">GitHub</a>
          </vue-button>
          |
          <vue-button class="actions get-started"
                      shape="capsule">
            <router-link to="/docs">开始</router-link>
          </vue-button>
        </div>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>基于Vue 3.2</h3>
          <p>
            使用 <strong>Composition API</strong> 和
            <br/>
            <strong> &lt; script setup &gt; 语法糖</strong>
            <br/>
            <span>每个组件代码简洁、易读、严谨</span>
          </p>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3>基于 TypeScript</h3>
          <p>源代码采用TypeScript</p>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-vite"></use>
          </svg>
          <h3>使用Vite 开发、构建</h3>
          <p>秒级运行、快速开发</p>
        </li>
      </ul>
    </div>
    <Waves></Waves>
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
        margin-top: 18px;

        .actions {
          padding: 8px 0;
          background: #f6f6f6;

          a {
            line-height: 24px;
            margin: 0 8px;
            color: #4f5959;
            display: inline-block;
            border-radius: 24px;
            padding: 8px 24px;
          }

          &:deep(.vue-icon-wrapper) {
            padding-left: 1em;

            > svg {
              fill: #7f8c8d;
            }
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

      > li {
        margin: 16px 16px;
        display: grid;
        justify-content: start;
        align-content: space-between;
        grid-template-areas:
          "icon title"
          "icon text";
        grid-template-columns: 80px auto;
        grid-template-rows: 1fr auto;

        > svg {
          grid-area: icon;
          width: 64px;
          height: 64px;
        }

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

  .custom-shape-divider-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);

    svg {
      position: relative;
      display: block;
      width: calc(100% + 1.3px);
      height: 96px;
    }

    .shape-fill {
      fill: rgba(183, 233, 230, 50);
    }

  }
}
</style>
