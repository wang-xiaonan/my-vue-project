<template>
	<div class="header">
	  <div class="content-wrapper">
	  	<div class="avatar">
	  	  <img width="64" height="64" :src="seller.avatar">
	  	</div>
	  	<div class="content">
	  	  <div class="title">
	  	  	<span class="brand"></span>
	  	  	<span class="name">{{seller.name}}</span>
	  	  </div>
	  	  <div class="description">
	  	  	{{seller.description}}/{{seller.deliveryTime}}分钟送达
	  	  </div>
	  	  <div v-if="seller.supports" class="support">
	  	  	<span class="icon" :class="classMap[seller.supports[0].type]"></span>
	  	  	<span class="text">{{seller.supports[0].description}}</span>
	  	  </div>
	  	</div>
	  </div>
	  <div class="bulletin-wrapper"></div>
	</div>
</template>
<script>
  export default {
    name: 'stHeader',
    props: {
      seller: {
        type: Object
      }
    },
    created: function () {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/index.styl"

  .header
    color #fff
    background #000
  	.content-wrapper
  	  padding 24px 12px 18px 24px
  	  font-size 0
  	  .avatar
  	  	display inline-block
  	  	vertical-align top
  	  	& > img
  	  	 border-radius 2px
  	  .content
  	  	display inline-block
  	  	margin-left 16px
  	  	.title
  	  	  margin 2px 0 8px 0
  	  	  .brand
  	  	  	display inline-block
  	  	  	vertical-align top
  	  	  	width 30px 
  	  	  	height 18px
  	  	  	bg-img ('brand')
  	  	  	background-size 30px 18px
  	  	  	background-repeat no-repeat
  	  	  .name
  	  	  	margin-left 6px
  	  	  	font-size 16px
  	  	  	line-height 18px
  	  	  	font-weight bold
  	  	  	color #fff
  	  	.description
  	  	  margin-bottom 10px
  	  	  font-size 12px
  	  	  line-height 12px
  	  	  font-weghit 200
  	  	  color #fff
  	  	.support
  	  	  margin-bottom 2px
	  	  .icon
	  	    display inline-block
	  	    margin-right 4px
	  	    width 12px
	  	    height 12px
	  	    vertical-align top
	  	    background-size 12px 12px
	  	    background-repeat no-repeat
	  	    &.decrease
	  	      bg-img ('decrease_1')
	  	    &.discount
	  	    	bg-img ('discount_1')
	  	    &.special
	  	    	bg-img ('special_1')
	  	    &.invoice
	  	    	bg-img ('invoice_1')
	  	    &.guarantee
	  	    	bg-img ('guarantee_1')
	  	  .text
	  	    line-height 12px
	  	    font-size 10px
	  	    color #fff
  	  	  
  	  	    
</style>