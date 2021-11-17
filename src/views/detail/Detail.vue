<template>
  <div id='detail'>
    <detail-nav-bar class='detail-nav' @titleClick='titleClick' ref='nav'/>
    <scroll class='content' 
    ref='scroll' 
    :probe-type='3'
    @scroll='contentScroll'>
      <detail-swiper :top-images='topImages'/>
      <detail-base-info :goods='goods'/>
      <detail-shop-info :shop='shop'/>
      <detail-goods-info :detail-info='detailInfo' @imageLoad='imageLoad'/>
      <detail-param-info ref='params' :param-info='paramInfo'/>
      <detail-comment-info ref='comment' :comment-info='commentInfo'/>
      <goods-list ref='recommend' :goods='recommends'/>
    </scroll>
    <detail-bottom-bar @addCart='addToCart' />
    <back-top @click.native='backClick' v-show='isShowBackTop'/>
   
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from'./childComps/DetailBottomBar'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'

import {getDetail, Goods, Shop, GoodsParam, getRecommend} from 'network/detail'
import {debounce} from 'common/utils'
import {itemListenerMixin, backTopMixin} from 'common/mixin'

import {mapActions} from 'vuex'
export default {
    name: 'Detail',
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomBar,
      Scroll,
      GoodsList
    },
    mixins: [itemListenerMixin, backTopMixin],
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: [],
        themeTopYs: [],
        getThemeTopY: null,
        currentIndex: 0
      }
    },
    created() {
      //保存iid
      this.iid = this.$route.params.iid

      //根據iid請求數據
        getDetail(this.iid).then(res => {
          //1.獲得輪播圖數據
          console.log(res)
          const data = res.result;
          this.topImages = data.itemInfo.topImages
          //2.獲得商品信息
          this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
          //3.獲得店舖信息
          this.shop = new Shop(data.shopInfo)
          //4.獲得商品詳細數據
          this.detailInfo = data.detailInfo;
          //5.獲得參數數據
          this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
          //6.獲得評論信息
          if (data.rate.cRate !==0) {
            this.commentInfo = data.rate.list[0]
          }
       })
      //請求推薦數據
      getRecommend().then(res => {
        this.recommends = res.data.list
      })

      //給getThemeTopY賦值進行防抖
      this.getThemeTopY = debounce(() => {
        this.themeTopYs = [];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
        this.themeTopYs.push(Number.MAX_VALUE);
        console.log(this.themeTopYs)
      },100)
    },
    mounted() {
    },
    destroyed() {
      //離開時取消監聽
      this.$bus.$off('itemImgLoad', this.itemImgListener)
    },
    methods: {
      ...mapActions(['addCart']),
      //圖片加載完刷新
      imageLoad() {
        this.$refs.scroll.refresh()
        //圖片加載完才有完整的offsetTop,然後調用getThemeTopY
        this.getThemeTopY()
      },
      //點擊detail-nav跳轉相應位置
      titleClick(index) {
        console.log(index)
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)
      },
      //滾動時detail-nav跳轉相應位置
      contentScroll(position) {
        //獲得Y值
        const positionY = -position.y
        let length = this.themeTopYs.length
        //                length - 1 因為Math最大值是作區間用而且
        for(let i = 0;i < length -1; i++) {
          //positionY與detail-nav做對比,this.currentIndex !== i 是防止賦值太頻繁
          if(this.currentIndex !== i && (positionY >= this.themeTopYs[i]
          && positionY <this.themeTopYs[i+1])) {
            this.currentIndex = i;
            //將Datil位置的currentIndex給Scroll
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }
        //是否顯示回到頂部
       this.isShowBackTop = (-position.y) > 1000
      },
      //1.獲得購物車訊息
      addToCart() {
        const product = {};
        product.image = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice;
        product.iid = this.iid;

      //2.將商品加入購物車,給mutations寫commit,給actions寫dispatch,並加用toast效果
        /*this.$store.dispatch('addCart', product).then(res => {
          console.log(res)
        })*/
       this.addCart(product).then(res => {
         this.$toast.show(res, 2000)
        })
      }
    }
}
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 3;
    background-color: #fff;
    height: 100vh;
  }
  
  .detail-nav {
    position: relative;
    z-index: 3;
    background-color: #fff;
  }

  .content {
    /*高度要減去頂部和底部才能滾動 */
    height: calc(100% - 44px - 49px);
  }
</style>