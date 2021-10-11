import Dialog from '@/lib/Dialog.vue';
import {createApp, h} from 'vue';

interface dialogOptions {
  title?: string;
  content?: string;
  ok?: Function;
  cancel?: Function;
}

export const openDialog = (options: dialogOptions) => {
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
      }, {title, content});
    }
  });
  app.mount(div);
};
