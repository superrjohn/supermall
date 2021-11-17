import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import toast from 'components/common/toast'

Vue.config.productionTip = false
//$bus是沒有值的,所以要new Vue()
Vue.prototype.$bus = new Vue()
//一啟動main.js就把toast插件安裝好,就會調用toast內的函數
Vue.use(toast)
//解決移動端300毫秒延遲
FastClick.attach(document.body)
//vue懶加載插件
Vue.use(VueLazyLoad, {
  //佔位圖
  loading: require('./assets/img/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
