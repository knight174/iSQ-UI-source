<template>
  <div class="button-demo isq-demo">
    <section>
      <h1>按钮 Button</h1>
      <h3>按钮 (Button) 是较为常见的 UI 控件。</h3>
    </section>
    <DemoTemplate
      caseTitle="经典主题 Classic Themes"
      :demoComp="ButtonCase1"
      :demoHtmlStr="demo1"
    ></DemoTemplate>
    <DemoTemplate
      caseTitle="深浅主题 Dark & Light"
      :demoComp="ButtonCase2"
      :demoHtmlStr="demo2"
    ></DemoTemplate>
    <DemoTemplate
      caseTitle="大小 Sizes"
      :demoComp="ButtonCase3"
      :demoHtmlStr="demo3"
    ></DemoTemplate>
    <DemoTemplate
      caseTitle="圆角 Round"
      :demoComp="ButtonCase4"
      :demoHtmlStr="demo4"
    ></DemoTemplate>
    <DemoTemplate
      caseTitle="加载状态 Loading"
      :demoComp="ButtonCase5"
      :demoHtmlStr="demo5"
    ></DemoTemplate>
    <DemoTemplate
      caseTitle="禁用状态 Disabled"
      :demoComp="ButtonCase6"
      :demoHtmlStr="demo6"
    ></DemoTemplate>
  </div>
</template>

<script lang='ts'>
import DemoTemplate from "../DemoTemplate.vue"
import ButtonDemo1 from "./demo_cases/Button.demo1.vue"
import ButtonDemo2 from "./demo_cases/Button.demo2.vue"
import ButtonDemo3 from "./demo_cases/Button.demo3.vue"
import ButtonDemo4 from "./demo_cases/Button.demo4.vue"
import ButtonDemo5 from "./demo_cases/Button.demo5.vue"
import ButtonDemo6 from "./demo_cases/Button.demo6.vue"

export default {
  name: "ButtonDemo",
  components: {
    DemoTemplate,
    ButtonDemo1,
    ButtonDemo2,
    ButtonDemo3,
    ButtonDemo4,
    ButtonDemo5,
    ButtonDemo6,
  },
  setup() {
const utilStr = `

<script lang='ts'>
// import the component (Button) and the css file
import { Button } from 'isq-ui'
import 'isq-ui/dist/lib/isq.css'

export default {
  components: {
    Button,
  },
};\n`+"<\/script>";

const demo1 = `
<template>
  <Button>默认按钮</Button>
  <Button theme="primary">主要按钮</Button>
  <Button theme="success">成功按钮</Button>
  <Button theme="warning">警告按钮</Button>
  <Button theme="danger">危险按钮</Button>
  <Button theme="link">链接按钮</Button>
  <Button theme="info">信息按钮</Button>
</template>` + utilStr;
const demo2 = `
<template>
  <Button dorl="white">白色按钮</Button>
  <Button dorl="light">浅色按钮</Button>
  <Button dorl="dark">深色按钮</Button>
  <Button dorl="black">黑色按钮</Button>
</template>` + utilStr;
const demo3 = `
<template>
  <Button>默认大小</Button>
  <Button size="normal">常规大小</Button>
  <Button size="small">小型按钮</Button>
  <Button size="medium">中型按钮</Button>
  <Button size="large">大型按钮</Button>
</template>` + utilStr;
const demo4 = `
<template>
  <Button round>默认按钮</Button>
  <Button theme="primary" round>主要按钮</Button>
  <Button theme="success" round>成功按钮</Button>
  <Button theme="warning" round>警告按钮</Button>
  <Button theme="danger" :round="true">危险按钮</Button>
  <Button theme="link" :round="true">链接按钮</Button>
  <Button theme="info" :round="true">信息按钮</Button>
</template>` + utilStr;
const demo5 = `
<template>
  <Button loading>加载中</Button>
  <Button loading>Loading</Button>
</template>` + utilStr;
const demo6 = `
<template>
  <Button disabled>禁用按钮</Button>
  <Button :disabled="true">Disabled Button</Button>
</template>` + utilStr;

    const ButtonCase1 = ButtonDemo1;
    const ButtonCase2 = ButtonDemo2;
    const ButtonCase3 = ButtonDemo3;
    const ButtonCase4 = ButtonDemo4;
    const ButtonCase5 = ButtonDemo5;
    const ButtonCase6 = ButtonDemo6;

    return {
      demo1, demo2,demo3,demo4,demo5,demo6,
      ButtonCase1,
      ButtonCase2,
      ButtonCase3,
      ButtonCase4,
      ButtonCase5,
      ButtonCase6,
    }
  }
};
</script>

<style lang='scss' scoped>
button {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
</style>
