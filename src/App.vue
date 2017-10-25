<template>
  <div>
    <stHeader></stHeader>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import stHeader from '@/components/header/stHeader.vue'

  export default {
    components: {
      stHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab
    display: flex
    text-align: center
    width 100%
    height 40px
    line-height 40px
    .tab-item
      flex auto
</style>
