<template>
  <div class="cartControl">
    <transition name="fade">
      <div v-show="food.count>0" class="cart-decrease st-remove_circle_outline" @click.stop.prevent="decreaseCart"></div>
    </transition>
    <div v-show="food.count>0" class="cart-count">{{food.count}}</div>
    <div class="cart-add st-add_circle" @click.stop.prevent="addCart($event)"></div>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    props: {
      food: {
        type: Object
      }
    },
    methods: {
      addCart (event) {
        if (!this.food.count) {
          // vue中直接赋值一个没有的字段要用vue的set接口
          Vue.set(this.food, 'count', 1)
        } else {
          this.food.count++
        }
        // 2.0中已废除$dispatch,$broadcast
        this.$root.eventsHub.$emit('cart.add', event.target)
      },
      decreaseCart () {
        if (this.food.count > 0) {
          this.food.count--
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .cartControl
    font-size 0
    .cart-decrease
      display inline-block
      padding 6px
      font-size 24px
      line-height 24px
      color rgb(0,160,220)
      transition all .2s linear
      &.fade-enter, &.fade-leave-to
        transform translate3d(0,0,0) rotate(0)
        opacity 0
      &.fade-enter-active, &.fade-leave-active
        transform translate3d(24px,0,0) rotate(180deg)
      &.fade-enter-to, &.fade-leave
        transform translate3d(0,0,0) rotate(0)
        opacity 1
    .cart-count
      display inline-block
      padding-top 6px
      vertical-align top
      width 12px
      font-size 10px
      line-height 24px
      text-align center
      color rgb(147,153,159)
    .cart-add
      display inline-block
      padding 6px
      font-size 24px
      line-height 24px
      color rgb(0,160,220)
</style>
