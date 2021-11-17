<template>
	<div id='home'>
	  <nav-bar class='home-nav'><div slot='center'>購物街</div></nav-bar>
	   <tab-control :titles='["流行", "新款", "精選"]' 
	    @tabClick='tabClick' 
			ref='tabControl1'
			class='tab-control'
			v-show='isTabFixed'/>

	  <scroll class='content' 
	  ref='scroll' 
	  :probe-type='3'
	  @scroll='contentScroll' 
	  :pull-up-load='true'
	  @pullingUp='loadMore'>
	    <home-swiper :banners='banners' @swiperImageLoad='swiperImageLoad'/>
	    <recommend-view :recommends='recommends'/>
	    <feature-view/>
	    <tab-control :titles='["流行", "新款", "精選"]' 
	    @tabClick='tabClick' 
			ref='tabControl2'/>
	    <goods-list :goods='showGoods'/>
	  </scroll>	
	  
	  <back-top @click.native='backClick' v-show='isShowBackTop'/>
	</div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'
  
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  
  import {getHomeMultidata, getHomeGoods} from 'network/home'
  import {itemListenerMixin ,backTopMixin} from 'common/mixin'

  export default {
    name: 'Home',
	components: {
	  HomeSwiper,
	  RecommendView,
	  FeatureView,
	  NavBar,
	  TabControl,
	  GoodsList,
	  Scroll
	},
	mixins: [itemListenerMixin ,backTopMixin],
	data() {
	  return{
	    banners: [],
		recommends: [],
		goods: {
		  'pop': {page: 0, list: []},
		  'new': {page: 0, list: []},
		  'sell': {page: 0, list: []}
		},
		currentType: 'pop',
		tabOffsetTop: 0,
		isTabFixed: false,
		saveY: 0
	  }
	},
	computed: {
	  showGoods() {
	    return this.goods[this.currentType].list
	  }
	},
	//Vue 元件被啟動時觸發,搭配 keep-alive 使用時(切換路由時保留位置)
	activated() {
		this.$refs.scroll.scrollTo(0, this.saveY, 0)
		this.$refs.scroll.refresh()
	},
	//Vue 元件被解除時觸發，搭配 keep-alive 使用(切換路由時保留位置)
	deactivated() {
	  this.saveY = this.$refs.scroll.getScrollY()
	},
	created() {
	  //1.請求多個數據
	  this.getHomeMultidata()
	
	  //2.請求商品數據
	  this.getHomeGoods('pop')
	  this.getHomeGoods('new')
	  this.getHomeGoods('sell')
	  
	},
	mounted(){
	},
		methods: {
	  /*事件監聽方法*/
	  loadMore() {
	    this.getHomeGoods(this.currentType)
	  },
	  
	  tabClick(index) {
	    switch(index) {
		  case 0:
		    this.currentType = 'pop'
			break
		  case 1:
		    this.currentType = 'new'
			break
		  case 2:
		    this.currentType = 'sell'
			break
		}
		  this.$refs.tabControl1.currentIndex = index;
			this.$refs.tabControl2.currentIndex = index;
	  },
	  backClick() {
	    this.$refs.scroll.scrollTo(0 ,0, 500)
	  },
	  contentScroll(position) {
			//是否顯示BackTop
	    this.isShowBackTop = (-position.y) > 1000

			//決定tabControl是否為fixed
			this.isTabFixed = (-position.y) > this.tabOffsetTop
	  },
	  swiperImageLoad() {
	  /*獲得tabControl的offsetTop*/
	  this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
	  },
	  
	  
	  /*網絡請求方法*/
	  getHomeMultidata() {
	    getHomeMultidata().then(res =>{
	     // console.log(res);
		    this.banners = res.data.banner.list;
		    this.recommends = res.data.recommend.list;
	    })
	  },
	  getHomeGoods(type) {
	    const page = this.goods[type].page +1
	    getHomeGoods(type, page).then(res => {
		  // push(...變量)會把變量中的元素遂個放進去
		  this.goods[type].list.push(...res.data.list);
		  this.goods[type].page += 1
		  //結束上拉加載更多,才可以有新一次的上拉載
		  this.$refs.scroll.finishPullUp()
	  })
	  }
    }	
  }
</script>

<style scoped>
  #home {
	position: relative;
	height: 100vh;
  }


  .home-nav {
    background-color: var(--color-tint);
	color:#fff;
	
	/*position: fixed;
	left: 0;
	right: 0;
	top: 0;
	z-index: 2;*/
  }
  
  .content {
    position: absolute;
	top: 44px;
	bottom: 49px;
	left: 0;
	right: 0;
	
	overflow: hidden;
  }

	.tab-control {
		position: relative;
		z-index: 2;
	}
</style>
