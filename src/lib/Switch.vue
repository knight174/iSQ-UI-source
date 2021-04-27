<template>
  <button 
    class="isq-switch"
    :class="{ 'isq-checked': value }" 
    :disabled="disabled" 
    @click="toggle"
  >
    <span></span>
  </button>
</template>

<script lang='ts'>
export default {
  name: "Switch",
  props: {
    value: Boolean,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };

    return {
      toggle,
    };
  },
};
</script>

<style lang='scss'>
$switch-d: #790e8b;
$switch-l: #df78ef;
$switch: #ab47bc;
$origin: #fff;
$orgin-track: #9b9b9b;

$shadow: 0 0 1px 1px rgba(#000, 0.25);
$shadow-active: 0 0 1px 5px rgba(#000, 0.25);

$h: 20px;
$w: 1.8 * $h;

button.isq-switch {
  position: relative;
  width: $w;
  height: $h;
  border-radius: 20px;
  border: none;
  outline: none;
  background-color: $orgin-track;
  cursor: pointer;
  span {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%) translateX(-50%);
    width: 1.25 * $h;
    height: 1.25 * $h;
    border-radius: 50%;
    background-color: $origin;
    box-shadow: $shadow;
    transition: 0.25s;
  }
}
button.isq-switch:active > span {
  box-shadow: $shadow-active;
}
button.isq-checked {
  background-color: $switch-l;
  span {
    background-color: $switch-d;
    left: 100%;
  }
}
button.isq-switch[disabled] {
  cursor: no-drop;
}
button.isq-switch[disabled]:active > span {
  box-shadow: $shadow;
}
</style>
