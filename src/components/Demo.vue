<script setup lang="ts">
import * as Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import VueButton from '@/lib/button.vue';
import {computed, ref} from 'vue';

const codeVisible = ref(true);
const props = defineProps({
  component: Object
});
const toggle = () => {
  codeVisible.value = !codeVisible.value;
};
const html = computed(() => {
  return Prism.highlight(props.component?.__sourceCode, Prism.languages.html, 'html');
});
</script>

<template>
  <div class="vue-demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="vue-demo-component">
      <keep-alive>
        <component :is="component"></component>
      </keep-alive>
    </div>
    <div class="vue-demo-actions">
      <VueButton @click="toggle">查看代码</VueButton>
    </div>
    <div class="vue-demo-code line-numbers" v-if="codeVisible">
      <pre class="language-html">
        <code class="language-html" v-html="html"></code>
      </pre>
    </div>
  </div>
</template>

<script lang="ts">
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';

export default {
  name: 'Demo'
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;

.vue-demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;

      > code {
        margin-left: -70px;
      }
    }
  }
}
</style>
