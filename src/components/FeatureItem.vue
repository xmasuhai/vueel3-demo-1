<script lang="ts" setup>
import {defineProps} from "vue";

const props = defineProps({
  iconName: String,
  title: String
})

</script>

<template>
  <li class="feature-item">
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="`#icon-${iconName}`"></use>
    </svg>
    <h3>{{ title }}</h3>
    <slot></slot>
  </li>
</template>

<script lang="ts">
export default {
  name: "FeatureItem"
}
</script>

<style lang="scss" scoped>
.feature-item {
  margin: 16px 16px;
  display: grid;
  justify-content: start;
  align-content: space-between;
  grid-template-areas:
      "icon title"
      "icon text";
  grid-template-columns: 80px auto;
  grid-template-rows: 1fr auto;

  & .icon {
    grid-area: icon;
    width: 64px;
    height: 64px;
  }

}
</style>