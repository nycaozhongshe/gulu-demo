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
      <g-button>
        下一页
      </g-button>
    </g-button-group>
  </div>
</template>

<script>
import button from './components/button.vue';
import buttonGroup from './components/buttonGroup.vue';
import toast from './components/toast';
export default {
  name: 'app',
  components: {
    'g-button': button,
    'g-button-group': buttonGroup,
    toast
  },
  methods: {
    click() {
    }
  },
  mounted() {
    console.log(this.$toast(111))
    // console.log(this.$toast());
  },
};
</script>

<style lang="scss">
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
