<template>
  <button class="isq-btn" :class="classObj" :disabled="disabled">
    <slot />
  </button>
</template>

<script lang='ts'>
import { computed } from "vue";
export default {
  name: "Button",
  props: {
    theme: {
      type: String,
      default: "button",
    },
    dorl: {
      type: String,
      // default: "white",
    },
    size: {
      type: String,
      default: "default",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { theme, size, dorl, loading, round } = props;
    const classObj = computed(() => {
      return {
        [`isq-theme-${theme}`]: theme,
        [`isq-theme-${dorl}`]: dorl,
        [`isq-size-${size}`]: size,
        [`isq-loading`]: loading,
        [`isq-round`]: round,
      };
    });
    return {
      classObj,
    };
  },
};
</script>

<style lang='scss'>
$color: #121212;
$color2: #fefefe;
$focus: #8e24aa;
$primary: #d765f4;
$link: #3e8ed0;
$info: #00d1b2;
$success: #0da360;
$warning: #ffe49b;
$danger: #f15070;

.isq-btn {
  min-width: 64px;
  height: 36px;
  line-height: 1;
  letter-spacing: 0.5px;
  color: $color;
  padding: 0 16px;
  background-color: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  text-align: center;
  white-space: nowrap;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  &:focus {
    box-shadow: 0 0 1px 1px rgba($focus, 0.8);
  }
  // theme
  &.isq-theme-primary {
    background-color: $primary !important;
    color: $color2 !important;
    &:focus {
      box-shadow: 0 0 1px 1px rgba($primary, 0.8);
    }
    &[disabled] {
      cursor: no-drop;
      background-color: #efefef !important;
      color: #7f7f7f !important;
      border-color: #efefef !important;
      &:hover {
        filter: brightness(1);
      }
    }
  }
  &.isq-theme-link {
    background-color: $link !important;
    color: $color2 !important;
    &:focus {
      box-shadow: 0 0 1px 1px rgba($link, 0.8);
    }
    &[disabled] {
      cursor: no-drop;
      background-color: #efefef !important;
      color: #7f7f7f !important;
      border-color: #efefef !important;
      &:hover {
        filter: brightness(1);
      }
    }
  }
  &.isq-theme-info {
    background-color: $info !important;
    &:focus {
      box-shadow: 0 0 1px 1px rgba($info, 0.8);
    }
    &[disabled] {
      cursor: no-drop;
      background-color: #efefef !important;
      color: #7f7f7f !important;
      border-color: #efefef !important;
      &:hover {
        filter: brightness(1);
      }
    }
  }
  &.isq-theme-success {
    background-color: $success !important;
    color: #ffffff !important;
    &:focus {
      box-shadow: 0 0 1px 1px rgba($success, 0.8);
    }
    &[disabled] {
      cursor: no-drop;
      background-color: #efefef !important;
      color: #7f7f7f !important;
      border-color: #efefef !important;
      &:hover {
        filter: brightness(1);
      }
    }
  }
  &.isq-theme-warning {
    background-color: $warning !important;
    &:focus {
      box-shadow: 0 0 1px 1px rgba($warning, 0.8);
    }
    &[disabled] {
      cursor: no-drop;
      background-color: #efefef !important;
      color: #7f7f7f !important;
      border-color: #efefef !important;
      &:hover {
        filter: brightness(1);
      }
    }
  }
  &.isq-theme-danger {
    background-color: $danger !important;
    color: #ffffff !important;
    &:focus {
      box-shadow: 0 0 1px 1px rgba($danger, 0.8);
    }
    &[disabled] {
      cursor: no-drop;
      background-color: #efefef !important;
      color: #7f7f7f !important;
      border-color: #efefef !important;
      &:hover {
        filter: brightness(1);
      }
    }
  }

  // sizes
  // default normal: 16px
  &.isq-size-small {
    min-width: 40px;
    height: 27px;
    line-height: 27px;
    padding: 0 12px;
    font-size: 12px;
    &[disabled] {
      cursor: no-drop;
      background-color: #efefef !important;
      color: #7f7f7f !important;
      border-color: #efefef !important;
      &:hover {
        filter: brightness(1);
      }
    }
  }
  &.isq-size-medium {
    min-width: 96px;
    height: 45px;
    line-height: 45px;
    padding: 0 18px;
    font-size: 20px;
    &[disabled] {
      cursor: no-drop;
      background-color: #efefef !important;
      color: #7f7f7f !important;
      border-color: #efefef !important;
      &:hover {
        filter: brightness(1);
      }
    }
  }
  &.isq-size-large {
    min-width: 128px;
    height: 54px;
    line-height: 54px;
    padding: 0 20px;
    font-size: 24px;
    &[disabled] {
      cursor: no-drop;
      background-color: #efefef !important;
      color: #7f7f7f !important;
      border-color: #efefef !important;
      &:hover {
        filter: brightness(1);
      }
    }
  }

  // dark or light
  &.isq-theme-light {
    background-color: #f5f5f5;
    color: #515151 !important;
    &[disabled] {
      cursor: no-drop;
      background-color: #efefef !important;
      color: #7f7f7f !important;
      border-color: #efefef !important;
      &:hover {
        filter: brightness(1);
      }
    }
  }
  &.isq-theme-dark {
    background-color: #473b3b;
    color: #ffffff !important;
    &[disabled] {
      cursor: no-drop;
      background-color: #efefef !important;
      color: #7f7f7f !important;
      border-color: #efefef !important;
      &:hover {
        filter: brightness(1);
      }
    }
  }
  &.isq-theme-black {
    background-color: #121212;
    color: #ffffff !important;
    &[disabled] {
      cursor: no-drop;
      background-color: #efefef !important;
      color: #7f7f7f !important;
      border-color: #efefef !important;
      &:hover {
        filter: brightness(1);
      }
    }
  }
  &.isq-theme-white {
    background-color: #ffffff;
    &[disabled] {
      cursor: no-drop;
      background-color: #efefef !important;
      color: #7f7f7f !important;
      border-color: #efefef !important;
      &:hover {
        filter: brightness(1);
      }
    }
  }

  // disabled
  &[disabled] {
    cursor: no-drop;
    background-color: #efefef !important;
    color: #7f7f7f !important;
    border-color: #efefef !important;
    &:hover {
      filter: brightness(1);
    }
  }

  // round
  &.isq-round {
    border-radius: 34px;
  }

  // loading
  &.isq-loading::before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    width: 12px;
    height: 12px;
    margin-right: 5px;
    border-radius: 50%;
    border: 2px solid $focus;
    border-bottom: 2px solid transparent;
    animation: rotateCircle 0.5s linear infinite;
    -webkit-animation: rotateCircle 0.5s linear infinite;
  }
}

[class*="isq-theme-"] {
  &:hover {
    filter: brightness(0.95);
  }
}

@keyframes rotateCircle {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
