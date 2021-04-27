<template>
  <Button theme="link" @click="toggle">点击打开 Modal</Button>
  <Modal
    v-model:visible="isClose"
    :allowCloseOverlay="false"
    :confirm="fn1"
    :cancel="fn2"
    :commonPlanel="false"
  >
    <template #content>
      <p>文本内容</p>
    </template>
  </Modal>
</template>

<script lang='ts'>
import {ref} from "vue"
import Button from "../../../lib/Button.vue";
// import the component (Modal)
import Modal from "../../../lib/Modal.vue";

export default {
  components: {
    Button,
    Modal,
  },
  setup() {
    const isClose = ref<boolean>(false);
    const toggle = () => {
      isClose.value = !isClose.value;
    };
    const fn1 = () => {
      console.log('已确认');
      return true;
    };
    const fn2 = () => {
      console.log('已取消');
      return null;
    };
    return {
      isClose,
      toggle,
      fn1,
      fn2,
    };
  },
};
</script>
