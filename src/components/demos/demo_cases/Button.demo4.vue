<template>
  <Button round>默认按钮</Button>
  <Button theme="primary" round>主要按钮</Button>
  <Button theme="success" round>成功按钮</Button>
  <Button theme="warning" round>警告按钮</Button>
  <Button theme="danger" :round="true">危险按钮</Button>
  <Button theme="link" :round="true">链接按钮</Button>
  <Button theme="info" :round="true">信息按钮</Button>
</template>

<script lang='ts'>
// import the component (Button)
import Button from "../../../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>
