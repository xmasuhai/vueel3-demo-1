import './index.scss';

export const svgJs = require('./svg/svg.js');
export {default as Switch} from './Switch.vue';
export {default as Button} from './Button.vue';
export {default as Tabs} from './Tabs.vue';
export {default as TabItem} from './TabItem.vue';
export {default as Dialog} from './Dialog.vue';
export {useDialog as useDialog} from './hooks/useDialog';
export {useCheckSlots as useCheckSlots} from './hooks/useCheckSlots';
export {useGetSlots as useGetSlots} from './hooks/useGetSlots';
