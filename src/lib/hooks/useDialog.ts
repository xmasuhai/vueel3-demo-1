import VlDialog from '../VlDialog.vue';
import {createApp, h} from 'vue';

export interface dialogOptions {
  title?: string;
  content?: string;
  ok?: () => void;
  cancel?: () => void;
}

export const useDialog = (dialogOptions: dialogOptions) => {
  const {title, content, ok, cancel} = dialogOptions;
  const div = document.createElement('div');
  document.body.appendChild(div);

  const close = () => {
    app.unmount();
    div.remove();
  };

  const app = createApp({
    render() {
      return h(VlDialog, {
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
