<template>
  <div class="main-bottom">
    <div class="btns">
      <a class="btn github" href="https://github.com/Knight174/iSQ-UI-source" target="_blank">GitHub</a>
      <router-link class="btn start" :to="{name: 'Doc'}">开始</router-link>
    </div>
  </div>
</template>

<script lang='ts'>
export default {
  name: "HomeMainBottom",
};
</script>

<style lang='scss' scoped>
.main-bottom {
  display: flex;
  justify-content: center;
  .btns {
    width: 28rem;
    // width: 45rem;
    // margin-top: 15rem;
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;
    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      // width: 16rem;
      // height: 6.5rem;
      // font-size: $s-mid-title;
      width: 12rem;
      height: 4.5rem;
      font-size: $s-sub;
      letter-spacing: 0.25rem;
      color: $c-white!important;
      background-color: $c-d-purple;
      border-radius: 3rem;
      // box-shadow: 0px 0.25rem 2rem $c-l-purple;
      transition: 0.5s;
      &:hover {
        background-color: $c-l-purple;
        color: #e5e5e5;
      }
    }
  }
}

@media screen and (min-width: 500px) {
  .main-bottom {
    .btns {
      margin-top: 5rem;
      width: 45rem;
      .btn {
        width: 12rem;
        height: 5rem;
        font-size: $s-title;
      }
    }
  }
}
@media screen and (min-width: 750px) {
  .main-bottom {
    .btns {
      margin-top: 15rem;
      .btn {
        width: 16rem;
        height: 6.5rem;
        font-size: $s-mid-title;
      }
    }
  }
}
</style>
