<template>
  <div id="app">
    <g-button icon-name="download"
              :loading="false"
              icon-position="right"
              @click="click"
              :disabled="true">
      提交
    </g-button>
    <g-button-group>
        <g-button>
          上一页
        </g-button>
        <g-button>
          更多
        </g-button>
        <g-button @click="message++">
          下一页
        </g-button>
    </g-button-group>
    <br>
    <br>

    <g-input :value="'aaa'">  
    </g-input >  
      <g-input :value="'aaa'" disabled>  
    </g-input >  
       <g-input :value="'aaa'" readonly>  
    </g-input > 

      <g-input  error v-model="message">  
    </g-input > 
    {{message}}
    <div id="test"></div>
  </div>
</template>

<script>
import button from "./components/button.vue";
import buttonGroup from "./components/buttonGroup.vue";
import input from "./components/input.vue";
export default {
  name: "app",
  data() {
    return {
      message: "11"
    };
  },
  components: {
    "g-button-group": buttonGroup,
    "g-input": input
  },
  methods: {
    click() {
      console.log("tag", "click");
    }
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
:root {
  --main-color: red;
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}
</style>
