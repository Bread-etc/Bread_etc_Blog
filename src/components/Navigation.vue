<!-- Navigation.vue for top -->
<template>
  <el-menu :default-active="activePath" :ellipsis="false" 
          mode="horizontal" :class="$style.wrapper"
  >
    <div :class="$style.logo">
      <a href="#" :class="$style.bread">
        <img src="@/assets/images/bread.png" alt="image/nav" width="24" height="24">
      </a>
      <div :class="$style.author">
        Bread_etc Blog
      </div>
    </div>
    <div :class="$style.flex"></div>
    <el-menu-item v-for="route in routes" :key="route.path" 
                :index="route.path" @click="handleNavigation(route.path)" 
                :class="$style.navList" class="hidden-md-and-down"
    >
      {{ route.title }}
    </el-menu-item>
    <el-menu-item>
      <el-switch></el-switch>
    </el-menu-item>
      <!-- <div :class="$style.navList" class="d-none d-md-block">
        路由选项和图标
        <ul>
          <li :class="$style.navBlock" v-for="(navLink, index) in navList" :key="index">
            <router-link :to='navLink.router' :class="[$style.navTitle, currentRoute(navLink.router) ? $style.currentPCRoute : '' ]">{{ navLink.title }}</router-link>
          </li>
          <li :class="$style.navBlock">
            <div :class="$style.modeChange">
              <ThemeSwitcher />
            </div>
          </li>
        </ul>
      </div>
      <div class="d-md-none" :class="$style.button">
        <button type="button" :class="$style.moblieButton" @click="dropdown">
          <span :class="$style.buttonContainer">
            <span :class="isDrop ? $style.buttonTopActive : $style.buttonTop"></span>
            <span :class="isDrop ? $style.buttonBottomActive : $style.buttonBottom"></span>
          </span>
        </button>
      </div>
    </div>
    制作下拉菜单
    <transition name="fade-slide">
      <div :class="$style.dropdownMenu" v-if="isDrop">
        <ul>
          <li v-for="(navLink, index) in navList" :key="index">
            <router-link :to='navLink.router' :class="[$style.moblieRouter, currentRoute(navLink.router) ? $style.currentMoblieRoute : '' ]">{{ navLink.title }}</router-link>
          </li>
        </ul>
     </div>
    </transition> -->
  </el-menu>
</template>

<script lang="ts" setup>
  import { ElMenu, ElMenuItem, ElSwitch } from 'element-plus';
  import { useRoute, useRouter } from 'vue-router';
  import { ref, onMounted, onUnmounted } from 'vue';

  const route = useRoute();
  const router = useRouter();
  const activePath = ref(route.path);

  // v-for遍历导航栏
  const routes = ref([
    {
      path: '/',
      title: '首页'
    },
    {
      path: '/study',
      title: '学习'
    },
    {
      path: '/daily',
      title: '日常'
    },
    {
      path: '/contact',
      title: '留言板'
    },
    {
      path: '/about',
      title: '关于'
    }
  ]);

  // 点击跳转路由
  const handleNavigation = (path) => {
    router.push(path);
  };



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
@import '@/assets/styles/theme/default-theme.scss';
@import '~components/Navigation.module.scss';
</style>