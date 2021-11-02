import {useSlots, VNode} from 'vue';

export const useGetSlots = () => {
  const slots = useSlots();
  const defaults: VNode[] = [...(slots.default as Function)()];
  return {defaults};
};
