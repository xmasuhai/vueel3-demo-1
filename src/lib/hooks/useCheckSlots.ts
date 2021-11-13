import {Component, VNode} from 'vue';

export const useCheckSlots = (defaults: VNode[], component: Component) => {
  defaults.forEach((tab: VNode) => {
    if (tab.type !== component) {
      console.error(new Error(`VlTabs 子标签必须是 ${component.name}`));
    }
  });
};
