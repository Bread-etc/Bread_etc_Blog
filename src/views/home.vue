<!-- home.vue for content -->
<template>
  <div :class="$style.container">
    <div :class="$style.content">
      <div :class="$style.welcome">
        <div :class="$style.homeWord">
          <div :class="$style.h1Active">
            🍞
            <div>eTc</div>
          </div>
          <h2>为生活找些乐子🎁</h2>
          <Typing />
          <div :class="$style.buttons" style="padding-left: 0">
            <div :class="$style.buttonActive" style="padding-left: 0">
              <button :class="$style.buttonStudy" @click="navigateToStudy">
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
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- <HomeCards /> -->
  </div>
</template>

<script setup lang="ts">
// 导入打字机效果组件
import Typing from "../components/Typing.vue";
import HomeCards from "../components/HomeCards.vue";
import { useRouter } from "vue-router";
// 使用路由跳转
const router = useRouter();

const navigateToStudy = () => {
  router.push("/study");
};

const navigateToContact = () => {
  router.push("/contact");
};
</script>

<style module lang="scss">
@import "~router/Home.module.scss";
</style>
