<!--  -->
<template>
  <div class="wrapper" >
      <input type="text"  :value="value" v-bind="[$attrs]" :class="{error}"   @input="$emit('input',$event.target.value)" @change="$emit('change',$event.target.value)" @focus="$emit('focus',$event.target.value)" @blur="$emit('blur',$event.target.value)">
  </div>
</template>

<script>
export default {
  name: "g-input",
  props: {
    value: {},
    error: {
      type: Boolean
    }
  },
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  created() {},

  methods: {}
};
</script>
<style lang='scss' scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
.wrapper {
  font-size: $font-size;
  display: inline-block;
  input {
    margin: 0;
    padding: 8px;
    height: $height;
    border: 1px solid $border-color;
    line-height: 1;
    font-size: inherit;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
      background-image: none;
      background-color: #fff;
      border-color: #ebeef5;
    }
    &.error {
      border-color: #f14530;
    }
  }
}
</style>