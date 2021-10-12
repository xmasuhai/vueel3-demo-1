import {Component, VNode} from 'vue';

export const useCheckSlots = (defaults: VNode[], component: Component) => {
  defaults.forEach((tag: VNode) => {
    if (tag.type !== component) {
      console.error(new Error(`Tabs 子标签必须是 ${component.name}`));
    }
  });
};
