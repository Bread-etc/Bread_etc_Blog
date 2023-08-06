<!-- 入口文件 -->
<script setup lang="ts">
  import Navigation from './components/Navigation.vue'
</script>


<template>
  <img src="./assets/icons/star-light.png" alt="Blog logo">
  <Navigation />
  <router-view></router-view>
</template>

<style scoped>
  
</style>
