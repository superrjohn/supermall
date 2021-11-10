import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
//$bus是沒有值的,所以要new Vue()
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
