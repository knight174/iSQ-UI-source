<template>
  <div class="switch-demo isq-demo">
    <!-- demo intro -->
    <section>
      <h1>开关 Switch</h1>
      <h3>
        开关 (Switch)
        是用于二进制状态（例如开/关）的特殊复选框。除了常规情况下的 Switch，iSQ
        UI 还提供了禁用状态下的 Switch。
      </h3>
    </section>
    <!-- demo case 1 -->
    <DemoTemplate
      caseTitle="常规开关 Common Switch"
      :demoComp="SwitchCase1"
      :demoHtmlStr="demo1"
    ></DemoTemplate>
    <!-- demo case 2 -->
    <DemoTemplate
      caseTitle="禁用状态 Disabled Switch"
      :demoComp="SwitchCase2"
      :demoHtmlStr="demo2"
    ></DemoTemplate>
  </div>
</template>

<script lang='ts'>
import DemoTemplate from "../DemoTemplate.vue"
import SwitchDemo1 from "./demo_cases/Switch.demo1.vue";
import SwitchDemo2 from "./demo_cases/Switch.demo2.vue";

import { ref } from 'vue';

export default {
  name: "SwitchDemo",
  components: {
    DemoTemplate,
    SwitchDemo1,
    SwitchDemo2,
  },
  setup() {
    const SwitchCase1 = SwitchDemo1;
    const SwitchCase2 = SwitchDemo2;

    const demo1 = ref<string>(`
<template>
  <Switch v-model:value="checked"></Switch>
</template>

<script lang='ts'>
  import { ref } from 'vue';
  // import the component (Switch) and css file
  import { Switch } from 'isq-ui';
  import 'isq-ui/dist/lib/isq.css'
  
  export default {
    components: {
      Switch,
    },
    setup() {
      const checked = ref<Boolean>(false);
      return {
        checked,
      };
    },
  };\n` + 
"<\/script>"
    );
    const demo2 = ref<string>(`
<template>
  <Switch disabled></Switch>
</template>

<script lang='ts'>
  // import the component (Switch) and the css file
  import { Switch } from 'isq-ui';
  import 'isq-ui/dist/lib/isq.css'
  
  export default {
    components: {
      Switch,
    },
  };\n` + 
"<\/script>");
    
    return {
      demo1, demo2, SwitchCase1, SwitchCase2
    }
}
};
</script>
