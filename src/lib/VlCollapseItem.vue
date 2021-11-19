<script lang="ts" setup>
import VlIcon from './VlIcon.vue';
import {inject, onMounted, ref, toRefs} from 'vue';

const isOpen = ref(false);

interface Props {
  title?: string;
  isDisabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  isDisabled: false
});
const {title, isDisabled} = toRefs(props);

const collapseEmitter = inject<any>('collapseEmitter');

const toggle = () => {
  // isOpen.value = !isOpen.value; // no need change isOpen.value itself
  // send title.value to parent node by different emitter event
  // eventbus update a copy of selectedArray in parent node
  // & let eventbus update:selected selectedArray
  isOpen.value
    ? collapseEmitter.emit('remove:selected', title.value)
    : collapseEmitter.emit('add:selected', title.value);
};

// listen to eventbus
// parent node update:selectedArray
// child node watch selectedArray.includes(title.value)
const addListener = () => {
  collapseEmitter.on('update:selected', (titleList: Array<string>) => {
    isOpen.value = titleList.includes(title.value);
  });

};

onMounted(() => {
  // listen to parent
  addListener();
});

</script>

<template>
  <div class="vue-collapse-item">
    <header class="vue-title"
            :class="{
              'title-show': isOpen && !isDisabled,
              'disabled': isDisabled
            }"
            @click="toggle">
      {{ title }}
      <VlIcon iconName="right"
              :class="{'down-icon': isOpen && !isDisabled}">
      </VlIcon>
    </header>
    <transition name="push-pull">
      <article class="vue-content"
               :class="{
                        'content-show': isOpen && !isDisabled
                        }"
               v-show="isOpen && !isDisabled">
        <slot></slot>
      </article>
    </transition>

  </div>
</template>

<script lang="ts">
export default {
  name: 'VlCollapseItem'
};
</script>

<style lang="scss">
@import '../lib/styles/var';

@mixin border-bottom-radius($radius: 0) {
  border-bottom-left-radius: $radius;
  border-bottom-right-radius: $radius;
}

@keyframes slide-open {
  0% {
    height: 0;
    padding: 0;
  }

  100% {
    height: auto;
    padding: 16px;
  }

}

@keyframes slide-close {
  0% {
    height: auto;
    padding: 16px;
  }

  100% {
    height: 0;
    padding: 0;
  }

}

.push-pull-enter-active {
  animation: slide-open .3s ease-in-out;
}

.push-pull-leave-active {
  animation: slide-close .3s ease-in-out;
}

.vue-collapse-item {
  align-items: center;
  background-color: lighten($collapse-grey, 30%);
  border-bottom: 1px solid $collapse-grey;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  width: 100%;

  > .vue-title {
    align-items: center;
    border-radius: $border-radius - 1;
    display: flex;
    justify-content: space-between;
    min-height: 32px;
    padding: 0 8px;
    width: 100%;

    > .down-icon {
      transform: rotate(90deg);
    }

    &.disabled {
      background-color: lighten($collapse-grey, 50%);
      border-radius: 0;
      color: lighten($basic-bg-dk, 80%);
      cursor: not-allowed;
    }
  }

  > .vue-content {
    background-color: $basic-bg-lt;
    padding: 18px;
    width: 100%;

    &.content-show {
      border-top: 1px solid $collapse-grey;
    }
  }

  // .collapse-item
  &:first-child {
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;
    outline: 1px solid $collapse-grey;

    // v-show = true
    > .vue-title.title-show {
      border-top: 0;
    }
  }

  // .collapse-item
  &:last-child {
    border-bottom: 0; //  覆盖 border-bottom: 1px solid $collapse-grey;
    border-bottom-left-radius: $border-radius;
    border-bottom-right-radius: $border-radius;
    outline: 1px solid $collapse-grey;

    // v-show = true
    > .vue-title.title-show {
      @include border-bottom-radius;
    }

    > .vue-content {
      @include border-bottom-radius($border-radius);
    }
  }

}

</style>
