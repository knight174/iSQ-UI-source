<template lang='pug'>
.not-found
  h1 Not Found
  p
    | Try going to
    router-link(:to="{ name: 'Home' }") Home
</template>

<script lang='ts'>
export default {
  name: "NotFound",
};
</script>

<style lang='scss' scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: $c-black;
  margin-top: -6rem;
  h1 {
    font-size: 32px;
    color: #fff !important;
    margin: 3rem;
  }
  p {
    font-size: 18px;
    color: #fff !important;
    & > a {
      color: #fff !important;
    }
  }
}
</style>
