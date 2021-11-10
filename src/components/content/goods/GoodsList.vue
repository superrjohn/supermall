<template>
  <div class='goods'>
	<good-list-item v-for='item in goods' :goods-item='item'/>
  </div>
</template>

<script>
  import GoodListItem from './GoodListItem'

  export default {
  	name: "GoodsList",
	components: {
	  GoodListItem
	},
	props: {
	  goods: {
	    type: Array,
		default() {
		  return []
		}
	  }
	}
  }
</script>

<style scoped>
   .goods {
    display: flex;
	/*flex-wrap:每行按照子元素寬度排列*/
    flex-wrap: wrap;
	/*每行子元素中間的間隔相同,但最左和最右會有小許差別*/
    justify-content: space-around;
	
    padding: 2px;
  }
</style>
