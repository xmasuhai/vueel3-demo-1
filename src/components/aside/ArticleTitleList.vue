<script lang="ts" setup>
import {inject, Ref, toRefs} from 'vue';

interface Props {
  articleTitle?: string;
  toDir?: string;
  routerInfo?: Array<Record<string, string>>;
}

const props = withDefaults(defineProps<Props>(), {
  articleTitle: ''
});

const {articleTitle, routerInfo, toDir} = toRefs(props) || {};

const emitter = inject<any>('evBus');

const asideVisible = inject<Ref<boolean>>('asideVisible');

const closeAside = () => {
  emitter.on('update:asideVisible', () => {
    asideVisible!.value = false;
  });
};

</script>

<template>
  <header>
    <h2>
      <router-link class="alink" :to="toDir">
        {{ articleTitle }}
      </router-link>
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
</template>

<script lang="ts">
export default {
  name: 'ArticleTitleList'
};
</script>

<style lang="scss" scoped>
header {
  > h2 {
    margin-bottom: 4px;
    line-height: 50px;
    padding: 0 16px;
    user-select: none;
  }
}

ol {
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

</style>
