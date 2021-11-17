import Toast from './Toast'

const obj = {}

//把Vue傳過來,就可以在vue原型上添加物件
obj.install = function(Vue) {
  //1.創建組件構造器
  const toastContrustor = Vue.extend(Toast)
  //2.用New方法,根據組件構造器,可以創建出來一個組件物件
  const toast = new toastContrustor()
  //3.將Toast.vue組件件物,手動掛載到某一個元素上
  toast.$mount(document.createElement('div'))
  //4.toast.$el對應就是div
  document.body.appendChild(toast.$el)
  //在全局上可直接用$toast中的方法,好處只要在main.js使用,就可在vue任意項目上使用
  Vue.prototype.$toast = toast;
}

export default obj 
