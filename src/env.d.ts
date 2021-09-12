/// <reference types="vite/client" />

declare module '*.vue' {
  import {DefineComponent, ComponentOptions} from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  export const componentOptions: ComponentOptions;
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
