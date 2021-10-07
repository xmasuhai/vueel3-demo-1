<script setup lang="ts">
interface Props {
  theme?: 'button' | 'link' | 'text';
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'button'
});
const {theme} = props;

</script>

<template>
  <div>
    <button class="vue-button"
            :class="`theme-${theme}`">
      <slot></slot>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Button'
};
</script>
