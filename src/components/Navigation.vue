<!-- Navigation.vue for top -->
<template>
  <nav class="navbar navbar-expand-md fixed-top" :class="[$style.wrapper, isSticky ? $style.showSticky : '']">
    <div class="container p-2" :class="$style.navbar">
      <div :class="$style.logoEgg">
        <a :class="$style.egg" href="#" >
          <img src="@/assets/images/egg.png" alt="image/nav">
        </a>
        <div :class="$style.who" class="text-break">
          Bread_etc's Blog
        </div>
      </div>
      <div :class="$style.navButton" class="d-md-none">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div :class="$style.navList" class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- 路由选项和图标 -->
        <ul class="navbar-nav me-auto mb-lg-0">
          <li :class="$style.navBlock" class="nav-item">
            <router-link to="/" :class="$style.navTitle" class="nav-link active" aria-current="page">首页</router-link>
          </li>
          <li :class="$style.navBlock" class="nav-item">
            <router-link to="/study" :class="$style.navTitle" class="nav-link" >学习</router-link>
          </li>
          <li :class="$style.navBlock" class="nav-item">
            <router-link to="/daily" :class="$style.navTitle" class="nav-link">日常</router-link>
          </li>
          <li :class="$style.navBlock" class="nav-item">
            <router-link to="/contact" :class="$style.navTitle" class="nav-link">留言板</router-link>
          </li>
          <li :class="$style.navBlock" class="nav-item">
            <router-link to="/about" :class="$style.navTitle" class="nav-link">关于</router-link>
          </li>
          <li :class="$style.navBlock" class="nav-item">
            <div :class="$style.navIcons" class="nav-link">
              <a href="https://github.com/Bread-etc">
                <img src="~icons/github.svg" alt="svg/github" :class="$style.githubIcon" width="24" height="24">
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from "vue";

  // 判断导航栏是否处于顶部,发生滚动则跟随
  const isSticky = ref(false);
  const handleScroll = () => {
    // 滚动的时候设置isSticky为true
    if(window.scrollY > 0){
      isSticky.value = true;
    } else {
      isSticky.value = false;
    }
  };
  
  // 挂载函数
  onMounted (() => {
    window.addEventListener('scroll', handleScroll);
  });
  // 释放函数
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
  
</script>

<style module lang="scss">
  @import '@/assets/scss/mixin.scss';
  @import '@/assets/scss/Navigation.module.scss';
  
</style>