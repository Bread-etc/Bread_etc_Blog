<!-- home.vue for content -->
<template>
  <div class="p-2" :class="$style.content">
    <div class="row" :class="$style.contentRow">
      <div class="col-md-6" :class="$style.homeWord">
        <h1>
          蛋壳 Blog 1111111111111111111111111111111111222222222222222222222
        </h1>
        <Typing />
      </div>
      <div class="col-md-6" :class="$style.homeImg">
        <img src="@/assets/images/YoshiLogo.png" alt="image/bigLogo" class="img-fluid">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  // 导入打字机效果组件
  import Typing from '../components/Typing.vue'
</script>

<style module lang="scss">
  @import '@/assets/scss/mixin.scss';
  @import '@/assets/scss/Home.module.scss';
</style>