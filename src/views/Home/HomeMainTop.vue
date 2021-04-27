<template>
  <div class="main-top">
    <div class="logo-box">
      <img :src="logo" alt="a big logo of iSQ-UI" />
    </div>
    <div class="decription">
      <h1 class="brand">iSQ UI 官方文档</h1>
      <h3 class="more">
        一套基于Vue3.0<span class="vue3"></span>，用TypeScript<span
          class="ts"
        ></span
        >编写而成的UI框架。
      </h3>
      <div class="features">
        <span>⚡️ 轻量</span>
        <span>💡 简约</span>
        <span>ヾ(•ω•`)o 易用</span>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import logo from "../../assets/logo.png";

export default {
  name: "HomeMainTop",
  data() {
    return {
      logo: logo,
    };
  },
};
</script>

<style lang='scss' scoped>
.main-top {
  margin-top: 5rem;
  display: flex;
  // justify-content: center;
  flex-direction: column;
  align-items: center;
  .logo-box {
    width: 21.5rem;
    height: 21.5rem;
    margin-bottom: 5rem;
    img {
      width: 100%;
    }
  }
  .decription {
    // max-width: 45rem;
    max-width: 35rem;
    min-height: 21.5rem;
    // margin-left: 7rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    h1.brand {
      text-align: center;
      // font-size: $s-big-title;
      font-size: 3.2rem;
      font-weight: 700;
      letter-spacing: 0.25rem;
    }
    h3.more {
      margin-top: 2rem;
      // font-size: $s-title;
      font-size: 2rem;
      font-weight: 700;
      letter-spacing: 0.25rem;
      line-height: 1.5;
      span {
        display: inline-block;
        height: 3.6rem;
        vertical-align: middle;
        font-weight: 600;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: 50%;
        &.vue3 {
          width: 6rem;
          background-image: url(../../assets/vue.png);
        }
        &.ts {
          width: 12rem;
          background-image: url(../../assets/ts.png);
        }
      }
    }
    .features {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: $s-sub;
      // text-align: center;
      span {
        margin-top: 2rem;
        text-align: center;
        display: inline-block;
        padding: 0.5rem 1.5rem;
        // margin-right: 2rem;
        font-weight: 500;
        background-color: $c-l-purple;
        color: $c-white!important;
        letter-spacing: 0.25rem;
        user-select: none;
        box-shadow: 0 0 0.25rem 0.25rem $c-yellow;
      }
    }
  }
}

@media screen and (min-width: 500px) {
  .main-top {
    .decription {
      max-width: 45rem;
      margin-left: 0;
      h1.brand {
        font-size: $s-big-title;
        text-align: center;
      }
      h3.more {
        font-size: $s-title;
        margin-top: 0;
      }
      .features {
        display: block;
        text-align: center;
        span {
          margin-right: 2rem;
          margin-top: 0;
        }
      }
    }
  }
}

@media screen and (min-width: 750px) {
  .main-top {
    // margin-top: -10rem;
    justify-content: center;
    flex-direction: row;
    .logo-box {
      margin-bottom: 0;
    }
    .decription {
      max-width: 45rem;
      margin-left: 7rem;
      h1.brand {
        font-size: $s-big-title;
        text-align: initial;
      }
      h3.more {
        font-size: $s-title;
      }
      .features {
        text-align: initial;
      }
    }
  }
}
</style>
