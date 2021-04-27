<template>
  <Button>默认大小</Button>
  <Button size="normal">常规大小</Button>
  <Button size="small">小型按钮</Button>
  <Button size="medium">中型按钮</Button>
  <Button size="large">大型按钮</Button>
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
