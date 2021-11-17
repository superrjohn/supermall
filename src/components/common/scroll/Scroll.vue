<template>
  <div class='wrapper' ref='wrapper'>
    <div class='content'>
	  <slot></slot>
	</div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  
  export default {
  	name: "Scroll",
	props: {
	  probeType: {
	    type: Number,
		default: 0
	  },
	  pullUpLoad: {
	    type: Boolean,
		default: false
	  }
	},
	data() {
	  return {
	    scroll: null
	  }  
	},
	mounted() {
	//1.創建BScroll物件
	  this.scroll = new BScroll(this.$refs.wrapper, {
	    click: true,
		probeType: this.probeType,
		pullUpLoad: this.pullUpLoad
	  })
	  
	  //2.監聽滾動的位置
	  if(this.probeType === 2 || this.probeType === 3){
	    this.scroll.on('scroll', (position) => {
	   // console.log(position)
	      this.$emit('scroll', position)
	  })
	  }
	  
	  //3.監聽上拉事件
	  if(this.pullUpLoad){
	    this.scroll.on('pullingUp', () => {
		  this.$emit('pullingUp')
		})
	  }
	},
	methods: {
	  scrollTo(x, y, time=300) {
	    this.scroll && this.scroll.scrollTo(x, y, time)
	  },
	  refresh() {
	  console.log('---')
	    this.scroll && this.scroll.refresh()
	  },
	  finishPullUp() {
	    this.scroll && this.scroll.finishPullUp()
	  },
		getScrollY() {
			return this.scroll? this.scroll.y : 0
		}
	}
  }
  /*Better-scroll決定區域滾動時,是根據scrollerHeight屬性決定,scrollerHeight屬性是
  根據Better-Scroll的ontent中的子組件高度,但在首頁中,開始計算高度,沒有把圖片計算
  在內,後來圖加載有了新高度,但scrollerHeight屬性已經計算了,所以會有上拉加載問題。
  解決:scroll.refresh() */
</script>

<style scoped>

</style>
