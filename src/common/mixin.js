 import {debounce} from './utils'
 import BackTop from 'components/content/backTop/BackTop'

 //全局混入
 export const itemListenerMixin = {
   /*防抖函數之圖片加載事件監聽
   因Home和Detail加載圖片時都用到防抖,所以將重複的物件加入mixin,減少重複性*/
   data() {
     return {
      itemImgListener: null
     }
   },
   mounted() {
    let newRefresh = debounce(this.$refs.scroll.refresh, 100)
    this.itemImgListener = () => {
      newRefresh()
    }
    this.$bus.$on('itemImgLoad', this.itemImgListener)
    console.log('我是混入內容')
    }
 }
//home.vue和detail.vue都用都backTop,所以放在mixin
 export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 300);
    }
  }
}