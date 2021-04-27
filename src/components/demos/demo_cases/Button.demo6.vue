<template>
  <Button disabled>禁用按钮</Button>
  <Button :disabled="true">Disabled Button</Button>
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
