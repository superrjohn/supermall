import {ADD_COUNTER, ADD_TO_CART} from "./mutation-types"

export default {
  addCart(context, payload){
    return new Promise((resolve,reject) => {
        //1.查找前看之前有沒有該商品
    let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
    //2.判斷oldProduct,true說明之前已點擊數量 +=1,false說明第一次點 +1
    if(oldProduct){
      //oldProduct.count += 1
      context.commit(ADD_COUNTER,oldProduct)
      resolve('當前的商品數量+1')
    }else{
      payload.count = 1
      //state.cartList.push(payload)
      context.commit(ADD_TO_CART,payload)
      resolve('添加了新的商品')
    }
    })
  }
}