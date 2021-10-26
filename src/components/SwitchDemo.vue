<template>
  <div>
    <h1>Switch 组件示例 </h1>
    <div class="demo">
      <h2>常规用法</h2>
      <div class="demo-component">
        <Switch1demo/>
      </div>
      <div class="demo-actions">
        <VueButton>查看代码</VueButton>
      </div>
      <div class="demo-code">
        <pre>&lt;Switch v-model:value="bool" /&gt;</pre>
      </div>
    </div>
    <div class="demo">
      <h2>支持 禁用</h2>
      <div class="demo-component">
        <Switch2demo/>
      </div>
      <div class="demo-actions">
        <VueButton>查看代码</VueButton>
      </div>
      <div class="demo-code">
        <pre>&lt;Switch v-model:value="bool" disabled /&gt;</pre>
      </div>
    </div>
    <div class="demo">
      <h2>支持 文字</h2>
      <div class="demo-component">
        <Switch3demo/>
      </div>
      <div class="demo-actions">
        <VueButton>查看代码</VueButton>
      </div>
      <div class="demo-code">
        <pre>&lt;Switch v-model:value="bool" disabled /&gt;</pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Switch1demo from '@/components/switch/switch1demo.vue';
import Switch2demo from '@/components/switch/switch2demo.vue';
import Switch3demo from '@/components/switch/switch3demo.vue';
import VueButton from '@/lib/Button.vue';
import {nextTick, onMounted, ref} from 'vue';

const message = ref('');
const changeMessage = async (newMessage: string) => {
  message.value = newMessage;
  await nextTick();
  console.log('Now DOM is updated');
  console.log(Switch1demo);
};

onMounted(() => {
  changeMessage('Hi');
});

</script>

<script lang="ts">
export default {
  name: 'SwitchDemo'
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
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
    }
  }
}
</style>
