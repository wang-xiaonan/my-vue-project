<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul v-if="goods">
        <li v-for="item in goods" class="menu-item">
          <span class="text border-1px">
            <type class="icon" v-show="item.type > 0" :type="item.type" :size="3"></type>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="goods-wrapper">
      <ul v-if="goods">
        <li v-for="item in goods" class="food-list">
          <h1 class="title">{{item.name}}</h1>
          <ul v-if="item.foods">
            <li v-for="food in item.foods" class="food-item border-1px">
              <div class="icon">
                <img :src="food.icon" width="57" height="57">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p v-show="food.description" class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="sellcount">月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  ¥<span class="nowprice">{{food.price}}</span>
                  <span v-show="food.oldPrice" class="oldprice">¥{{food.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import type from '@/components/type/type.vue'
  const ERR_OK = 0

  export default {
    components: {
      type
    },
    props: {
      seller: {
        type: Object
      }
    },
    data () {
      return {
        goods: {}
      }
    },
    created () {
      this.$http.get('/api/goods').then(response => {
        let rs = response.body
        if (rs.errno === ERR_OK) {
          this.goods = rs.data
        }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .goods
    display flex
    position absolute
    top 174px
    width 100%
    bottom 46px
    overflow hidden
    font-size 0
    .menu-wrapper
      flex 0 0 80px
      width 80px
      background #f3f5f7
      .menu-item
        display table
        height 54px
        width 56px
        line-height 14px
        padding 0 12px
        .text
          display table-cell
          vertical-align middle
          width 56px
          font-size 12px
          border-1px(rgba(7,17,27,.1))
          .icon
            display inline-block
            vertical-align top
            margin-right 2px
            width 12px
            height 12px
            background-size 12px 12px
    .goods-wrapper
      flex 1
      .title
        padding-left 14px
        font-size 12px
        height 26px
        line-height 26px
        color rgb(147,153,159)
        border-left 1px solid #d9dde1
        background #f3f5f7
      .food-item
        display flex
        margin 18px
        padding-bottom 18px
        border-1px(rgba(7,17,27,.1))
        &:last-child
          border-1px-none()
          margin-bottom 0
        .icon
          flex 0 0 57px
        .content
          margin-left 10px
          .name
            margin-top 2px
            height 14px
            line-height 14px
            font-size 14px
            color rgb(7,17,27)
          .desc, .extra
            font-size 10px
            height 10px
            line-height 10px
            margin-top 8px
            color rgb(147,153,159)
          .extra
            &.sellcount
              margin-right 12px
          .price
            margin-top 8px
            font-size 10px
            font-weight normal
            line-height 24px
            color rgb(240,20,20)
            .nowprice
              margin-right 8px
              font-size 18px
              font-weight 700
            .oldpaice
              font-size 10px
              text-decoration line-through
              color rgb(147,153,159)

</style>
