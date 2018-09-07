import Toast from './index.vue'

export default {
  install(Vue, options) {
    console.log(options)
    Vue.prototype.$toast = function (message) {
      const Coustructor = Vue.extend(Toast)
      let toast = new Coustructor()
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}