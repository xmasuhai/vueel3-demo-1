<script setup lang="ts">
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js';
import VlButton from '@/lib/VlButton.vue';
import {computed,/* nextTick, onMounted,*/ ref} from 'vue';

const codeVisible = ref(false);

const props = defineProps({
  component: Object
});

const toggle = () => {
  codeVisible.value = !codeVisible.value;
};

const html = computed(() => {
  return Prism.highlight(props.component?.__sourceCode, Prism.languages.html, 'html');
});

/*
const html = ref('');
const showCode = async () => {
  await nextTick(() => {
    html.value = Prism.highlight(props.component?.__sourceCode, Prism.languages.html, 'html');
  });
};
onMounted(() => {
  showCode();
});
*/

</script>

<template>
  <div class="vl-demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="vl-demo-component">
      <keep-alive>
        <component :is="component"></component>
      </keep-alive>
    </div>
    <div class="vl-demo-addition">
      <slot></slot>
    </div>
    <div class="vl-demo-actions">
      <VlButton @click="toggle">{{ codeVisible ? '隐藏代码' : '查看代码' }}</VlButton>
    </div>
    <div class="vl-demo-code" v-show="codeVisible">
      <pre class="language-html">
        <code class="language-html" v-html="html"></code>
      </pre>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Demo'
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;

.vl-demo {
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
      padding-left: 70px;

      @media(max-width: 500px) {
        padding-left: 5px;
      }

      > code {
        &:first-child {
          margin-left: -70px;
        }
      }
    }
  }

  &-addition {
    padding: 12px 16px;
  }

}
</style>
