<template>
  <div class="tabs-demo isq-demo">
    <section>
      <h1>选项卡 Tabs</h1>
      <h3>简单、可响应的水平导航选项卡。</h3>
    </section>

    <DemoTemplate
      caseTitle="水平选项卡"
      :demoComp="TabsCase1"
      :demoHtmlStr="demo1"
    ></DemoTemplate>
  </div>
</template>

<script lang='ts'>
import DemoTemplate from "../DemoTemplate.vue"
import TabsDemo1 from "./demo_cases/Tabs.demo1.vue"

export default {
  name: "TabsDemo",
  components: {
    DemoTemplate,
    TabsDemo1,
  },
  setup() {
    const demo1 = `
<template>
  <Tabs v-model:active="activeTitle">
    <Tab title="导航项目-1">内容一</Tab>
    <Tab title="导航项目-2">内容二</Tab>
    <Tab title="导航项目-3">内容三</Tab>
    <Tab title="导航项目-4">内容四</Tab>
    <Tab title="导航项目-5">内容五</Tab>
    <Tab title="导航项目-6">内容六</Tab>
  </Tabs>
</template>

<script lang='ts'>
import { ref } from 'vue';
// import components (Tab, Tabs) and the css file
import { Tab, Tabs } from 'isq-ui';
import 'isq-ui/dist/lib/isq.css'

export default {
  components: {
    Tab,
    Tabs,
  },
  setup() {
    const activeTitle = ref<String>("导航项目-1");
    return {
      activeTitle,
    };
  },
};\n` + "<\/script>";
    const TabsCase1 = TabsDemo1;
    return {
      demo1,
      TabsCase1,
    };
  },
};
</script>
