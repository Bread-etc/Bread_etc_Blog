<!-- home.vue for content -->
<template>
  <div :class="$style.container">
    <div :class="$style.content">
      <div :class="$style.welcome">
        <div :class="$style.homeFunction">
          <div :class="$style.headTitle">
            🍞<div>eTc</div>
          </div>
          <h2>为生活找些乐子🎁</h2>
          <Typing />
          <div :class="$style.buttonGroup">
            <div :class="$style.buttonActive">
              <button :class="$style.buttonStudy" @click="navigateToEssay">
                进入博客
              </button>
            </div>
            <div :class="$style.buttonActive">
              <button :class="$style.buttonContact" @click="navigateToContact">
                留言板
              </button>
            </div>
          </div>
        </div>
        <div :class="$style.homeImg">
          <div :class="$style.imgBg">
            <img
              src="@/assets/images/ggbond.png"
              alt="image/bigLogo"
            />
          </div>
        </div>
      </div>
    </div>
    <HomeCards />
  </div>
</template>

<script setup lang="ts">
import Typing from "./components/Typing.vue";
import HomeCards from "./components/HomeCards.vue";
import { useRouter } from "vue-router";
// 使用路由跳转
const router = useRouter();

const navigateToEssay = () => {
  router.push("/essay");
};

const navigateToContact = () => {
  router.push("/contact");
};
</script>

<style module lang="scss">
@import "~router/Home.module.scss";
</style>
