<template>
	<div class='cart'>
    <!--頂部-->
    <nav-bar class='nav-bar'>
      <div slot='center'>購物車({{length}})</div>
    </nav-bar>
    <!--商品列表-->
    <cart-list />
    <!--底部匯總-->
    <cart-bottom-bar />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'

//mapGetters(輔助函數):可直接用計算屬性
import {mapGetters} from 'vuex'
export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
   // ...mapGetters([cartLength, cartList]) 數組
   //物件形式 可以改名字
   ...mapGetters({  
      length: 'cartLength'
      })
    }
  }
</script>

<style scoped>
  .cart {
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }
</style>
