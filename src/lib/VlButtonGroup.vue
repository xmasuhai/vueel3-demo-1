<script setup lang="ts">
</script>

<template>
  <div class="vl-button-group">
    <slot>

    </slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'VlButtonGroup'
};
</script>

<style lang="scss">
@import 'styles/var.scss';

.vl-button {
  margin-right: 0;
  border-radius: 0;

  &-group {
    display: inline-flex;
    vertical-align: middle;
  }

  > &-wrapper {
    margin-right: 0;
    border-radius: 0;

    &:first-child {
      > .vl-button {
        border-top-left-radius: $border-radius ;
        border-bottom-left-radius: $border-radius ;
      }
    }

    &:last-child {
      > .vl-button {
        border-top-right-radius: $border-radius ;
        border-bottom-right-radius: $border-radius ;
      }
    }

    /*
    * 错误地显示 border 三边显示 一边被遮盖
    &:not(:first-child) {
      border-left: none;
      }
    */
    &:not(:first-child) {
      > .vl-button {
        margin-left: -2px;
      }
    }

    // 解决border被后面的遮挡掉一边
    &:hover {
      > .vl-button {
        position: relative;
        z-index: 1;

      }
    }

  }


}

</style>
