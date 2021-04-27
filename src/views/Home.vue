<template lang='pug'>
top-nav
.home
  home-main-top
  home-main-bottom
bottom-footer
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
import BottomFooter from "../components/BottomFooter.vue";
import HomeMainTop from "./Home/HomeMainTop.vue";
import HomeMainBottom from "./Home/HomeMainBottom.vue";

export default {
  name: "Home",
  components: {
    TopNav,
    BottomFooter,
    HomeMainTop,
    HomeMainBottom,
  },
};
</script>

<style lang='scss' scoped>
.home {
  min-height: calc(100vh - 6rem - 5rem);
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  // justify-content: center;
}

@media screen and (min-width: 750px) {
  .home {
    justify-content: center;
  }
}
</style>
