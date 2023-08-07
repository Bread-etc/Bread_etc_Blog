<!-- Navigation.vue for top -->
<template>
  <div :class="$style.header">
    <div :class="$style.nav">
      <div :class="$style.logo">
        <img src="@/assets/images/egg.png" alt="image/nav-image">
        <div :class="$style.blogName">
          Bread_etc's Blog
        </div>
      </div>
      <div :class="$style.navBox">
        <router-link to="/" :class="$style.navLink">首页</router-link>
      </div>
      <div :class="$style.navBox">
        <router-link to="/study" :class="$style.navLink">学习</router-link>
      </div>
      <div :class="$style.navBox">
        <router-link to="/daily" :class="$style.navLink">日常</router-link>
      </div>
      <div :class="$style.navBox">
        <router-link to="/contact" :class="$style.navLink">留言板</router-link>
      </div>
      <div :class="$style.navBox">
        <router-link to="/about" :class="$style.navLink">关于</router-link>
      </div>
    </div> 
  </div>
</template>

<script setup lang="ts">
  // 仅此引入全局样式，局部样式在style标签引入
  import '@/assets/css/global.less'
</script>

<style module>
  @import '@/assets/css/Navigation.module.less';
</style>