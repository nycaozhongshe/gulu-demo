import Vue from 'vue'
import App from './App.vue'
import Button from './components/button.vue'
import tomaoto from 'nytomto-ui/dist/gulu-demo'
let a = require('nytomto-ui')
console.log(a)
console.log(tomaoto)
Vue.component('g-button', Button)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

import chai from 'chai'
import chaiSpies from 'chai-spies'

chai.use(chaiSpies)
const expect = chai.expect;
{
  const Constructer = Vue.extend(Button)
  const button = new Constructer({
    propsData: {
      iconName: "loading"
    }
  })
  button.$mount()
  const useElement = button.$el.querySelector('use')
  expect(useElement.getAttribute('xlink:href')).to.equal('#icon-loading')
  button.$el.remove()
  button.$destroy()
}


{
  const Constructer = Vue.extend(Button)
  const button = new Constructer({
    propsData: {
      iconName: "download",
      loading: true
    }
  })
  button.$mount()
  const useElement = button.$el.querySelector('use')
  expect(useElement.getAttribute('xlink:href')).to.equal('#icon-loading')
  button.$el.remove()
  button.$destroy()
}

{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructer = Vue.extend(Button)
  const button = new Constructer({
    propsData: {
      iconName: "download",
    }
  })
  button.$mount(div)
  const svg = button.$el.querySelector('svg')

  let { order } = window.getComputedStyle(svg)
  expect(order).to.equal('1')
  button.$el.remove()
  button.$destroy()
}

{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructer = Vue.extend(Button)
  const button = new Constructer({
    propsData: {
      iconName: "download",
      iconPosition: "right"
    }
  })
  button.$mount(div)
  const svg = button.$el.querySelector('svg')
  let { order } = window.getComputedStyle(svg)
  expect(order).to.equal('2')
  button.$el.remove()
  button.$destroy()
}

{
  const Constructer = Vue.extend(Button)
  const gButton = new Constructer({
    propsData: {
      iconName: "download",
      iconPosition: "right"
    }
  })
  gButton.$mount()
  let spy = chai.spy(function () { })
  gButton.$on('click', spy)
  const button = gButton.$el
  button.click()
  expect(spy).to.have.been.called()
  gButton.$el.remove()
  gButton.$destroy()
}