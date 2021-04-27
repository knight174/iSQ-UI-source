import Modal from './Modal.vue'
import {createApp, h} from 'vue'
export const openModal = (options) => {
  const {title, content, allowCloseOverlay, confirm, cancel, commonPlanel} = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const closeTag = () => {
    // @ts-ignore
    app.unmount(div);
    div.remove();
  }
  const app = createApp({
    render () {
      return h(
        Modal,
        {
          visible: true,
          allowCloseOverlay: allowCloseOverlay,
          commonPlanel: commonPlanel,
          'onUpdate:visible': (newVisible) => {
            if (newVisible === false) {
              closeTag();
            }
          },
          confirm: confirm,
          cancel: cancel
        },
        {title, content, allowCloseOverlay}
      );
    }
  });
  app.mount(div);
}