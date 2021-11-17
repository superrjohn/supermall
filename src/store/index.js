import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
//1.安裝插件
Vue.use(Vuex)

const state = {
  cartList: []
}

//2.創建Store實例
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

//3.掛載實例
export default store
