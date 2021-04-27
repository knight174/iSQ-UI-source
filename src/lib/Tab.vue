<template>
  <div class="isq-tab">
    <slot />
  </div>
</template>

<script lang='ts'>
export default {
  name: 'Tab',
  props: {
    title: {
      type: String
    }
  }
}
</script>
