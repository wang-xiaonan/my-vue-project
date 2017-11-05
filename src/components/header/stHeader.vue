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
	  	<div v-if="seller.supports" class="support-count">
	  	  <span class="count">{{seller.supports.length}}个</span>
	  	  <i class="right-icon st-keyboard_arrow_right"></i>
	  	</div>
	  </div>
	  <div class="bulletin-wrapper">
	    <span class="title"></span><span class="text">{{seller.bulletin}}</span><i class="st-keyboard_arrow_right"></i>
	  </div>
	  <div class="background">
	  	<img :src="seller.avatar" width="100%" height="100%">
	  </div>
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
    position relative
    color #fff
    background rgba(7,17,27,.5)
  	.content-wrapper
  	  position relative
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
	  .support-count
	  	position absolute
	  	right 12px
	  	bottom 14px
	  	height 24px
	  	padding 0 8px
	  	height 24px
	  	line-height 24px
	  	border-radius 14px
	  	text-align center
	  	background rgba(0,0,0,.2)
	  	.count
	  	  vertical-align top
	  	  font-size 10px
	  	.right-icon
	  	  margin-left 2px
	  	  line-height 24px
	  	  font-size 14px
  	.bulletin-wrapper
  	  position relative
  	  height 28px
  	  line-height 28px
  	  padding 0 22px 0 12px
  	  white-space nowrap
  	  overflow hidden
  	  text-overflow ellipsis
  	  text-align center
  	  background rgba(7,17,27,.2)
  	  .title
  	  	display inline-block
  	  	vertical-align top
  	  	margin-top 8px
  	  	width 22px
  	  	height 12px
  	  	bg-img ('bulletin')
  	  	background-size 22px 12px
  	  	background-repeat no-repeat
  	  .text
  	  	vertical-align top
  	  	margin 0 4px
  	  	font-size 10px
  	  	line-height 28px
  	  .st-keyboard_arrow_right
  	  	position absolute
  	  	right 10px
  	  	top 7px
  	  	font-size 14px
  	.background
  	  position absolute
  	  top 0
  	  left 0 
  	  width 100%
  	  height 100%
  	  z-index -1
  	  filter blur(10px)
  	  	    
</style>