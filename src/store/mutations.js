import { ADD_COUNTER,ADD_TO_CART} from "./mutation-types"
 
export default {
  //mutatuins:用來修改state中的狀況,可以追蹤,盡量完成事件比較單一
    [ADD_COUNTER](state, payload) {
      payload.count++
    },
    [ADD_TO_CART](state, payload){
      payload.checked = true
      state.cartList.push(payload)
    }
}