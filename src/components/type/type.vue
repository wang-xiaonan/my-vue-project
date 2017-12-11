<template>
  <span class="icon" :class="imgClass"></span>
</template>

<script>
  export default {
    props: {
      type: Number,
      size: Number
    },
    computed: {
      imgClass () {
        return this.classMap[this.type] + '_' + this.size
      }
    },
    created () {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .icon
    background-repeat no-repeat
    &.decrease_1
      bg-img ('decrease_1')
    &.discount_1
      bg-img ('discount_1')
    &.special_1
      bg-img ('special_1')
    &.invoice_1
      bg-img ('invoice_1')
    &.guarantee_1
      bg-img ('guarantee_1')
    &.decrease_2
      bg-img ('decrease_2')
    &.discount_2
      bg-img ('discount_2')
    &.special_2
      bg-img ('special_2')
    &.invoice_2
      bg-img ('invoice_2')
    &.guarantee_2
      bg-img ('guarantee_2')
    &.decrease_3
      bg-img ('decrease_3')
    &.discount_3
      bg-img ('discount_3')
    &.special_3
      bg-img ('special_3')
    &.invoice_3
      bg-img ('invoice_3')
    &.guarantee_3
      bg-img ('guarantee_3')
    &.decrease_4
      bg-img ('decrease_4')
    &.discount_4
      bg-img ('discount_4')
    &.special_4
      bg-img ('special_4')
    &.invoice_4
      bg-img ('invoice_4')
    &.guarantee_4
      bg-img ('guarantee_4')
</style>
