<template>
  <Switch v-model:value="checked"></Switch>
</template>

<script lang='ts'>
import { ref } from "vue";
// import the component (Switch)
import Switch from "../../../lib/Switch.vue";
export default {
  components: {
    Switch,
  },
  setup() {
    const checked = ref<Boolean>(false);
    return {
      checked,
    };
  },
};
</script>
