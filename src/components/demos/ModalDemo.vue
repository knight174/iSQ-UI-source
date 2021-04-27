<template>
  <div class="modal-demo isq-demo">
    <section>
      <h1>模态框 Modal</h1>
      <h3>Modal 可以为用户提供对话框，用于信息显示、确认或取消信息等。</h3>
    </section>

    <DemoTemplate
      caseTitle="常规 Modal"
      :demoComp="ModalCase1"
      :demoHtmlStr="demo1"
    ></DemoTemplate>

    <DemoTemplate
      caseTitle="带有确认和取消功能的 Modal"
      :demoComp="ModalCase2"
      :demoHtmlStr="demo2"
    ></DemoTemplate>

    <DemoTemplate
      caseTitle="禁止通过点击遮罩层来关闭 Modal"
      :demoComp="ModalCase3"
      :demoHtmlStr="demo3"
    ></DemoTemplate>

    <DemoTemplate
      caseTitle="带有标题的 Modal"
      :demoComp="ModalCase4"
      :demoHtmlStr="demo4"
    ></DemoTemplate>

    <DemoTemplate
      caseTitle="Modal 直接传参式"
      :demoComp="ModalCase5"
      :demoHtmlStr="demo5"
    ></DemoTemplate>
  </div>
</template>

<script lang='ts'>
import DemoTemplate from "../DemoTemplate.vue"
import ModalDemo1 from "./demo_cases/Modal.demo1.vue"
import ModalDemo2 from "./demo_cases/Modal.demo2.vue"
import ModalDemo3 from "./demo_cases/Modal.demo3.vue"
import ModalDemo4 from "./demo_cases/Modal.demo4.vue"
import ModalDemo5 from "./demo_cases/Modal.demo5.vue"

export default {
  name: "ModalDemo",
  components: {
    DemoTemplate,
    ModalDemo1,
    ModalDemo2,
    ModalDemo3,
    ModalDemo4,
    ModalDemo5,
  },
  setup() {
    const laterStr =
`    <template #content>
      <p>文本内容</p>
    </template>
  </Modal>
</template>

<script lang='ts'>
import {ref} from 'vue'
// import the component (Modal) and the css file
import { Button, Modal } from 'isq-ui'
import 'isq-ui/dist/lib/isq.css'

export default {
  components: {
    Button,
    Modal,
  },
  setup() {
    const isClose = ref<boolean>(false);
    const toggle = () => {
      isClose.value = !isClose.value;
    };
    const fn1 = () => {
      console.log('已确认');
      return true;
    };
    const fn2 = () => {
      console.log('已取消');
      return null;
    };
    return {
      isClose,
      toggle,
      fn1,
      fn2,
    };
  },
};\n` + "<\/script>";
    const demo1 = `
<template>
  <Button theme="link" @click="toggle">点击打开 Modal</Button>
  <Modal
    v-model:visible="isClose"
    :confirm="fn1"
    :cancel="fn2"
    :commonPlanel="true"
  >\n` + laterStr;
    const demo2 = `
<template>
  <Button theme="link" @click="toggle">点击打开 Modal</Button>
  <Modal
    v-model:visible="isClose"
    :confirm="fn1"
    :cancel="fn2"
  >\n` + laterStr;
    const demo3 = `
<template>
  <Button theme="link" @click="toggle">点击打开 Modal</Button>
  <Modal
    v-model:visible="isClose"
    :allowCloseOverlay="false"
    :confirm="fn1"
    :cancel="fn2"
    :commonPlanel="false"
  >\n` + laterStr;
    const demo4 = `
<template>
  <Button theme="link" @click="toggle">点击打开 Modal</Button>
  <Modal
    v-model:visible="isClose"
    :allowCloseOverlay="false"
    :confirm="fn1"
    :cancel="fn2"
  >
    <template #title>
      <strong>标题</strong>
    </template>\n` + laterStr;
    const demo5 = `
<template>
  <Button @click="showModal">点击打开 Modal</Button>
</template>

<script lang='ts'>
// import the method openModal and the css file
import { Button, openModal } from 'isq-ui';
import 'isq-ui/dist/lib/isq.css'

export default {
  components: {
    Button,
  },
  setup() {
    const showModal = () => {
      openModal({
        title: "标题",
        content: "文本内容",
        allowCloseOverlay: false,
        commonPlanel: false,
        confirm() {
          return true;
        },
        cancel() {
          return null;
        },
      });
    };
    return {
      showModal
    }
  },
};\n` + "<\/script>";

    const ModalCase1 = ModalDemo1;
    const ModalCase2 = ModalDemo2;
    const ModalCase3 = ModalDemo3;
    const ModalCase4 = ModalDemo4;
    const ModalCase5 = ModalDemo5;

    return {
      demo4,demo1,demo2,demo3,demo5,
      ModalCase1,ModalCase2,ModalCase3,ModalCase4,ModalCase5,
    };
  },
};
</script>
