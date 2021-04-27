<template lang='pug'>
.doc-aside(v-if="asideVisible")
  doc-aside-nav
  doc-aside-comps
</template>

<script lang='ts'>
import { inject, Ref } from "vue";
import DocAsideNav from "./Aside/DocAsideNav.vue";
import DocAsideComps from "./Aside/DocAsideComps.vue";
export default {
  name: "DocAside",
  components: {
    DocAsideNav,
    DocAsideComps,
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("mark");
    return {
      asideVisible,
    };
  },
};
</script>

<style lang='scss' scoped>
.doc-aside {
  position: fixed;
  top: 6rem;
  left: 0;
  z-index: 100;
  width: 100%;
  min-width: 37.5rem;
  height: 100%;
  overflow-y: scroll;
  padding: 2rem 0;
  text-align: center;
  letter-spacing: 0.25rem;
  background-color: #eee;
  box-shadow: 0.5rem 0 0.3rem rgba(#111, 0.25);
}
@media screen and (min-width: 750px) {
  .doc-aside {
    min-width: 30rem;
    width: 30rem;
    text-align: initial;
  }
}
</style>
