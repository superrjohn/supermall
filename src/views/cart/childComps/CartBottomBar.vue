<template>
  <div class='bottom-bar'>
    <div class='check-content'>
      <check-button 
      :is-checked='isSelectAll' 
      class='check-button'
      @click.native='checkClcik'/>
      <span>全選</span>
    </div>

    <div class='price'>
      合計: {{totalPrice}}
    </div>

    <div class='calculate' @click='calcClick'>
      結算 ({{checkLenght}})
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

import {mapGetters} from 'vuex'

export default {
  mane: 'CartBottomBar',
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(['cartList']),
    /*先用filter過濾item.checked是否為true,是就選出來,之後用reduce累加價錢,
    preValue前一個值加當前的值,最後用toFixed保留兩位小數*/
    totalPrice() {
      return '¥' + this.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      },0).toFixed(2)
    },
    checkLenght() {
      return this.cartList.filter(item => item.checked).length
    },
    isSelectAll() {
      //默認情況下,為false,用find找到check為false時,說明不是全選,所以要取反
      if (this.cartList.length === 0) return false
      return !this.cartList.find(item => !item.checked)
    }
  },
  methods :{
    checkClcik() {
      if(this.isSelectAll){ //當全部都選中時
        this.cartList.forEach(item => item.checked = false)
      }else{//當部份不選中時
        this.cartList.forEach(item => item.checked = true)
      }
    },
    calcClick() {
      if(!this.isSelectAll){
        this.$toast.show('請選擇購買的商品',2000)
      }
    }
  }
}
</script>

<style scoped>
  .bottom-bar {
    height: 40px;
    background-color: #eee;
    position: relative;
    display: flex;
    line-height: 40px;
    font-size: 14px;
  }

  .check-content {
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 60px;
  }

  .check-button {
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 5px;
  }

  .price{
    margin-left: 20px;
    flex: 1;
  }

  .calculate {
    /*全選和結算給予寬度,價錢在display:flex下設flex:1就會去到最右 */ 
    width: 90px;
    color: #fff;
    background-color: red;
    text-align: center;
  }
</style>