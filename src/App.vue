<template>
  <div>
    <stHeader></stHeader>
    <div class="tab">
      <div class="tab-item">
        <a v-link="{path:'/goods'}">商品</a>
      </div>
      <div class="tab-item">
        <a v-link="{path:'/ratings'}">评价</a>
      </div>
      <div class="tab-item">
        <a v-link="{path:'/seller'}">商家</a>
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
