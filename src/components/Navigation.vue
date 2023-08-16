<!-- Navigation.vue for top -->
<template>
  <nav class="navbar navbar-expand-md" :class="[$style.wrapper, isSticky ? $style.showSticky : '']">
    <div class="container p-2" :class="$style.navbar">
      <div :class="$style.logoEgg">
        <a :class="$style.egg" href="#" >
          <img src="@/assets/images/egg.png" alt="image/nav">
        </a>
        <div :class="$style.who" class="text-break">
          Bread_etc's Blog
        </div>
      </div>
      <div :class="$style.navList" class="d-none d-md-block">
        <!-- 路由选项和图标 -->
        <ul class="navbar-nav">
          <li :class="$style.navBlock" v-for="(navLink, index) in navList" :key="index">
            <router-link :to='navLink.router' :class="$style.navTitle">{{ navLink.title }}</router-link>
          </li>
          <li :class="$style.navBlock">
            <div :class="$style.navIcons">
              <a href="https://github.com/Bread-etc">
                <img src="~icons/github.svg" alt="svg/github" :class="$style.githubIcon" width="24" height="24">
              </a>
            </div>
          </li>
        </ul>
      </div>
      <!-- 制作移动端小按钮 -->
      <!-- d-md-none 指在中等屏幕以上隐藏 -->
      <div class="d-md-none" :class="$style.button">
        <button type="button" :class="$style.moblieButton" @click="dropdown">
          <span :class="$style.buttonContainer">
            <span :class="isDrop ? $style.buttonTopActive : $style.buttonTop"></span>
            <span :class="isDrop ? $style.buttonBottomActive : $style.buttonBottom"></span>
          </span>
        </button>
      </div>
    </div>
    <!-- 制作下拉菜单 -->
    <transition name="fade-slide">
      <div :class="$style.dropdownMenu" v-if="isDrop">
        <ul>
          <li v-for="(navLink, index) in navList" :key="index">
            <router-link :to='navLink.router' :class="$style.moblieRouter">{{ navLink.title }}</router-link>
          </li>
        </ul>
     </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from "vue";

  // 使用v-for重写ul导航栏组件
  const navList = ref([
    {
      router: '/',
      title: '首页'
    },
    {
      router: '/study',
      title: '学习'
    },
    {
      router: '/daily',
      title: '日常'
    },
    {
      router: '/contact',
      title: '留言板'
    },
    {
      router: '/about',
      title: '关于'
    }
  ]);

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

  // 制作下拉菜单dropdown
  const isDrop = ref(false);
  const dropdown = () => {
    // 点击时下拉状态取反
    isDrop.value = !isDrop.value;
  };
  
</script>

<style module lang="scss">
  @import '@/assets/scss/mixin.scss';
  @import '@/assets/scss/Navigation.module.scss';

</style>