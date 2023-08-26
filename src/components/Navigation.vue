<!-- Navigation.vue for top -->
<template>
  <div :class="$style.navbar">
    <div :class="$style.headerContent">
      <div :class="$style.logo">
        <a href="#" :class="$style.bread">
          <img
            src="@/assets/images/bread.png"
            alt="image/nav"
            width="24"
            height="24"
          />
        </a>
        <div :class="$style.author">Bread_etc Blog</div>
      </div>
      <div :class="$style.navList">
        <div
          :class="$style.navItem"
          v-for="route in routes"
          :key="route.path"
          :index="route.path"
          @click="handleNavigation(route.path)"
        >
          <div :class="$style.navTitle">
            {{ route.meta.title }}
          </div>
        </div>
        <!-- <ThemeSwitcher /> -->
        <div :class="$style.button">
          <button type="button" :class="$style.moblieButton" @click="dropdown">
            <span :class="$style.buttonContainer">
              <span
                :class="isDrop ? $style.buttonTopActive : $style.buttonTop"
              ></span>
              <span
                :class="
                  isDrop ? $style.buttonBottomActive : $style.buttonBottom
                "
              ></span>
            </span>
          </button>
        </div>
      </div>
      <!-- 下拉菜单 -->
      <transition name="fade-slide">
        <div :class="$style.dropdownMenu" v-if="isDrop">
          <ul>
            <li
              v-for="route in routes"
              :key="route.path"
              :index="route.path"
              @click="handleNavigation(route.path)"
            >
              {{ route.meta.title }}
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted, onUnmounted } from "vue";

const route = useRoute();
const router = useRouter();
// 当前选中路由
const activePath = ref(route.path);

// v-for遍历导航栏
const routes = ref([
  {
    path: "/",
    meta: {
      title: "首页",
    },
  },
  {
    path: "/study",
    meta: {
      title: "学习",
    },
  },
  {
    path: "/daily",
    meta: {
      title: "日常",
    },
  },
  {
    path: "/contact",
    meta: {
      title: "留言板",
    },
  },
  {
    path: "/about",
    meta: {
      title: "关于",
    },
  },
]);

// 点击跳转路由
const handleNavigation = (path: string) => {
  router.push(path);
};

// 判断导航栏是否处于顶部,发生滚动则跟随
const isSticky = ref(false);
const handleScroll = () => {
  // 滚动的时候设置isSticky为true
  if (window.scrollY > 0) {
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
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
// 释放函数
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style module lang="scss">
@import "@/assets/styles/theme/dark-theme.scss";
@import "~components/Navigation.module.scss";
</style>
