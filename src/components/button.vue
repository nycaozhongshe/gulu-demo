<!--  -->
<template>
  <button class="g-button"
          :class="[{[`icon-${iconPosition}`]: true},{'disabled':$attrs.disabled}]"
          @click="$emit('click')"
          v-bind="[$attrs]">
    <icon iconClass="loading"
          v-if="loading"
          class="icon loading">
    </icon>
    <icon :iconClass="iconName"
          v-else-if="iconName"
          class="icon">
    </icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import icon from './icon';
export default {
  props: {
    iconPosition: {
      type: String,
      default: 'left',
      validator(val) {
        if (val === 'left' || val === 'right') {
          return true;
        } else {
          return false;
        }
      }
    },
    iconName: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  components: { icon },

  computed: {},

  mounted() {
    console.log(this.$attrs, '');
  },

  created() {},

  methods: {}
};
</script>
<style lang='scss' scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover,
  &:focus {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .content {
    order: 2;
  }
  > .icon {
    order: 1;
    margin-right: 0.1em;
  }
  &.icon-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.1em;
    }
  }
  .loading {
    animation: spin 2s infinite linear;
  }
}
.disabled {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}
</style>