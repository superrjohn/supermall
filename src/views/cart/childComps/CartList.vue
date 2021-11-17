<template>
  <div class='cart-list'>
    <scroll class='content' ref='scroll'>
      <cart-list-item v-for='(item,index) in cartList' 
      :key='index'
      :product='item' />
      </scroll>
    </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

import CartListItem from './CartListItem'
//輔助函數
import {mapGetters} from 'vuex'

export default {
  name: 'CartList',
  components:{
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  activated() {
    //需要刷新,不然better-scroll會滾動不了,因一開始加載cart的高度為0
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
  .cart-list {
    height: calc(100% - 44px - 49px - 40px);
  }

  .content {
    height: 100%;
    overflow: hidden;
  }
</style>