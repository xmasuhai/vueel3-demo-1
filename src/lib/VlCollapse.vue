<script lang="ts" setup>
import mitt from 'mitt';
import {provide, onMounted, toRefs} from 'vue';
import VlCollapseItem from './VlCollapseItem.vue';

interface Props {
  itemsData?: Record<string, any>[];
  selectedArray?: Array<string>;
  onlyShowSingle?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  itemsData: () => ([]),
  selectedArray: () => ([]),
  onlyShowSingle: false
});
const {itemsData, selectedArray, onlyShowSingle} = toRefs(props);

const collapseEmitter = mitt();
provide('collapseEmitter', collapseEmitter);
const emits = defineEmits(['update:selectedArray']);

const giveSelectedArrayToSon = (selectedArray: Array<string>) => {
  collapseEmitter.emit('update:selected', selectedArray);
};

const updateSelectedArrayToAll = (selectedArray: Array<string>) => {
  // to parent
  emits('update:selectedArray', selectedArray);
  // to son by eventBus
  giveSelectedArrayToSon(selectedArray);
};

const monitorSelectedArray = () => {
  let selectedArrayCopy = JSON.parse(JSON.stringify(selectedArray.value));

  collapseEmitter.on('add:selected', (title) => {
    onlyShowSingle.value
        ? selectedArrayCopy = [title]
        : selectedArrayCopy.push(title);
    updateSelectedArrayToAll(selectedArrayCopy);
  });

  collapseEmitter.on('remove:selected', (title) => {
    const index = selectedArrayCopy.indexOf(title);
    selectedArrayCopy.splice(index, 1);
    updateSelectedArrayToAll(selectedArrayCopy);
  });

};

onMounted(() => {
  giveSelectedArrayToSon(selectedArray.value);
  monitorSelectedArray();
});

</script>

<template>
  <div class="vl-collapse">
    <slot>
      <VlCollapseItem v-for="(item, index) in itemsData"
                      :title="item.title"
                      :isOpen="item.isOpen"
                      :disabled="item.disabled"
                      :key="index">
      </VlCollapseItem>
    </slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'VlCollapse'
};
</script>

<style lang="scss">
@import './styles/var.scss';
@import 'styles/mixins.scss';

// namespace: 'vl'
// .vl-collapse
@include bem(collapse) {
  align-items: center;
  border: 1px solid $collapse-grey;
  border-radius: $border-radius;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
</style>
