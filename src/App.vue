<template>
  <div>
    <!-- <router-view/> -->
    <!-- <div class="header">
      header
    </div> -->
    <stHeader></stHeader>
    <div class="tab">
      tab
    </div>
    <div class="content">
      content
    </div>
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

<style>
</style>
