<!-- Navigation.vue for top -->
<template>
  <nav class="navbar navbar-expand-md" :class="[$style.wrapper, isSticky ? $style.showSticky : '']">
    <div class="container p-2" :class="$style.navbar">
      <div :class="$style.logoEgg">
        <a :class="$style.egg" href="#" >
          <img src="@/assets/images/bread.png" alt="image/nav" width="24" height="24">
        </a>
        <div :class="$style.who" class="text-break">
          Bread_etc's Blog
        </div>
      </div>
      <div :class="$style.navList" class="d-none d-md-block">
        <!-- 路由选项和图标 -->
        <ul class="navbar-nav">
          <li :class="$style.navBlock" v-for="(navLink, index) in navList" :key="index">
            <router-link :to='navLink.router' :class="[$style.navTitle, currentRoute(navLink.router) ? $style.currentPCRoute : '' ]">{{ navLink.title }}</router-link>
          </li>
          <li :class="$style.navBlock">
            <div :class="$style.modeChange">
              <button @click="themeStore.toggleDarkMode">切换</button>
            </div>
          </li>
          <li :class="$style.navBlock">
            <div :class="$style.navIcons">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
              </svg>
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
            <router-link :to='navLink.router' :class="[$style.moblieRouter, currentRoute(navLink.router) ? $style.currentMoblieRoute : '' ]">{{ navLink.title }}</router-link>
          </li>
        </ul>
     </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
  import { useRouter } from "vue-router";
  import { useThemeStore } from "../stores/modules/theme";
  import { ref, onMounted, onUnmounted } from "vue";

  // 切换深色模式
  const themeStore = useThemeStore();


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
  
  // 制作下拉菜单dropdown
  const isDrop = ref(false);
  const dropdown = () => {
    // 点击时下拉状态取反
    isDrop.value = !isDrop.value;
  };

  // 读取当前路由
  const router = useRouter();
  const currentRoute = ( path : string ) => {
    // 判断为true就展示当前路由样式
    return router.currentRoute.value.path === path
  }

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