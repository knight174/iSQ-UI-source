<template lang='pug'>
top-nav
.doc
  .content
    doc-aside
    main
      router-view
</template>

<script lang='ts'>
import TopNav from "../components/TopNav.vue";
import DocAside from "./Doc/DocAside.vue";
import router from '../router/index.ts'

export default {
  name: "Doc",
  components: {
    TopNav,
    DocAside,
  },
  setup() {
    router.beforeEach((to, from, next) => {
      document.getElementById('app').scrollTop = 0;
      document.documentElement.scrollTop = 0;
      next();
    });
  },
};
</script>

<style lang='scss' scoped>
.doc {
  height: calc(100vh - 6rem);
  .content {
    main {
      padding: 2rem;
      min-height: calc(100vh - 6rem);
    }
  }
}
</style>
