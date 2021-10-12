import Dialog from '@/lib/Dialog.vue';
import {createApp, h, Ref} from 'vue';

export interface dialogOptions {
  title?: Ref<string>;
  content?: Ref<string>;
  ok?: Function;
  cancel?: Function;
}

export const useDialog = (options: dialogOptions) => {
  const {title, content, ok, cancel} = options;
  const div = document.createElement('div');
  document.body.appendChild(div);

  const close = () => {
    app.unmount();
    div.remove();
  };

  const app = createApp({
    render() {
      return h(Dialog, {
        visible: true,
        'onUpdate:visible': (newVisible: boolean) => {
          if (!newVisible) {close();}
        },
        ok,
        cancel,
      }, {
        title,
        content
      });
    }
  });
  app.mount(div);

};
