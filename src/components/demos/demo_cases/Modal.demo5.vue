<template>
  <Button @click="showModal">点击打开 Modal</Button>
</template>

<script lang='ts'>
// import openModal
import { openModal } from "../../../lib/openModal.ts";
import Button from "../../../lib/Button.vue";

export default {
  components: {
    Button,
  },
  setup() {
    const showModal = () => {
      openModal({
        title: "标题",
        content: "文本内容",
        allowCloseOverlay: false,
        commonPlanel: false,
        confirm() {
          return true;
        },
        cancel() {
          return null;
        },
      });
    };
    return {
      showModal
    }
  },
};
</script>
