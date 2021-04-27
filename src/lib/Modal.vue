<template>
  <template v-if="visible">
    <teleport to="body">
      <div class="isq-modal-wrapper" @click.self="closeModalByOverlay">
        <div class="isq-modal">
          <header>
            <slot name="title" />
            <div class="close" @click="closeModal">❌</div>
          </header>
          <section>
            <slot name="content" />
          </section>
          <footer v-if="!commonPlanel">
            <Button theme="success" @click="confirm">确认</Button>
            <Button @click="cancel">取消</Button>
          </footer>
        </div>
      </div>
    </teleport>
  </template>
</template>

<script lang='ts'>
import Button from "./Button.vue";
export default {
  name: "Modal",
  components: {
    Button,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    allowCloseOverlay: {
      type: Boolean,
      default: true,
    },
    confirm: {
      type: Function,
    },
    cancel: {
      type: Function,
    },
    commonPlanel: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const closeModal = () => {
      context.emit("update:visible", !props.visible);
    };
    const closeModalByOverlay = () => {
      if (props.allowCloseOverlay) {
        closeModal();
      }
    };
    const confirm = () => {
      if (props.confirm && props.confirm() !== false) {
        closeModal();
      }
    };
    const cancel = () => {
      props.cancel?.();
      closeModal();
    };
    return {
      closeModal,
      closeModalByOverlay,
      confirm,
      cancel,
    };
  },
};
</script>

<style lang='scss'>
.isq-modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  .isq-modal {
    min-width: 320px;
    width: 50%;
    background-color: #fff;
    font-size: 16px;
    border: 2px solid #790e8b;
    header,
    section,
    footer {
      padding: 20px;
    }
    header {
      position: relative;
    }
    header > .close {
      font-size: 20px;
      text-align: center;
      line-height: 25px;
      width: 25px;
      height: 25px;
      position: absolute;
      top: 50%;
      right: 15px;
      transform: translateY(-50%);
      cursor: pointer;
    }
    header,
    footer {
      display: flex;
      align-items: center;
      height: 50px;
      background-color: #e3e3e3;
    }
    section {
      min-height: 200px;
      max-height: 60vh;
      overflow-y: scroll;
      line-height: 1.3;
    }
    footer {
      button {
        margin-right: 20px;
      }
    }
  }
}

@media screen and (min-width: 750px) {
  .isq-modal-wrapper {
    .isq-modal {
      width: 640px;
      font-size: 24px;
      header {
        font-size: 32px;
      }
    }
  }
}
</style>
