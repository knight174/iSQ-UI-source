<template lang='pug'>
router-view
//- router-view(v-slot='{ Component }')
//-   keep-alive
//-     component(:is='Component')
</template>

<script lang='ts'>
import { provide, ref } from "vue";
import router from "./router";
export default {
  name: "App",
  setup() {
    const width = window.innerWidth;
    const asideVisible = ref(width < 750 ? false : true);
    provide("mark", asideVisible);

    router.afterEach((to, from) => {
      if (width < 750) {
        // 路由切换后，App.vue中的 asideVisible 变成 false，这样侧边栏就会隐藏。
        asideVisible.value = false;
      }
    });


    function listenWidth() {
      const width = window.innerWidth;
      if (width >= 750) {
        asideVisible.value = true;
      }
      router.afterEach((to, from) => {
        if (width < 750) {
          asideVisible.value = false;
        }
      });
    }

    (function (fn) {
      window.addEventListener("resize", resizeThrottler, false);
      let resizeTimeout;
      function resizeThrottler() {
        if (!resizeTimeout) {
          resizeTimeout = setTimeout(function () {
            resizeTimeout = null;
            fn();
          }, 66);
        }
      }
    })(listenWidth);
  },
};
</script>
