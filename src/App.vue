<!-- 入口文件 -->
<script setup lang="ts">
  import Navigation from './components/Navigation.vue';
  import Footer from './components/Footer.vue';
  
</script>


<template>
  <div class="container-fluid">
    <div class="row sticky-top">
      <Navigation />
    </div>
    <div class="row" >
      <router-view></router-view>
    </div>
    <div class="row">
      <Footer />
    </div>
  </div>
</template>

<style lang="scss">

</style>