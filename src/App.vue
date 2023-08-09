<!-- 入口文件 -->
<script setup lang="ts">
  import Navigation from './components/Navigation.vue'
</script>


<template>
  <!-- container-fluid 流式容器 -->
  <div class="container-fluid">
    <div class="row">
      <!-- 导航栏 -->
      <Navigation />
    </div>
    <div class="row">
      <router-view></router-view>
    </div>
    <div class="row">
      <!-- 底部栏 -->
      <footer class="footer">
          备案xx号:213213
      </footer>
    </div>
  </div>
</template>

<style lang="scss">
  @import '@/assets/scss/mixin.scss';
</style>
