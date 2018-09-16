<!--  -->
<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script>
import button from './button';
export default {
  data() {
    return {};
  },

  components: { 'g-button': button },

  computed: {},

  mounted() {
    for (let node of this.$el.children) {
      let nodeName = node.nodeName.toLowerCase();
      if (nodeName !== 'button') {
        console.warn(`g-button-group子元素应全为button,而你写的是${nodeName}`);
      }
    }
  },

  methods: {}
};
</script>
<style lang='scss' scoped>
.g-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .g-button {
    border-radius: 0;
    // &:not(:first-child ){
    //   border-left: none;
    // }
    margin-left: -1px;
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
    &:focus {
      position: relative;
      z-index: 1;
    }
  }
}
</style>