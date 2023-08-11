<!-- home.vue for content -->
<template>
  <div class="container p-2" :class="$style.content">
    <div class="row" :class="$style.contentRow">
      <div class="col-md-6" :class="$style.homeWord">
        <h1>蛋壳_Blog</h1>
        <Typing />
        <div :class="$style.buttons" style="padding-left: 0;">
          <div :class="$style.buttonActive" style="padding-left: 0;">
            <button :class="$style.buttonStudy"  @click="navigateToStudy">进入博客</button>
          </div>
          <div :class="$style.buttonActive">
             <button :class="$style.buttonContact" @click="navigateToContact">留言板</button>
          </div>
        </div>
      </div>
      <div class="col-md-6" :class="$style.homeImg">
        <div :class="$style.imgBg">
          <img src="@/assets/images/YoshiLogo.png" alt="image/bigLogo" class="img-fluid">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  // 导入打字机效果组件
  import Typing from '../components/Typing.vue';
  import { useRouter } from 'vue-router';
  // 使用路由跳转
  const router = useRouter();

  const navigateToStudy = () => {
    router.push('/study');
  };

  const navigateToContact = () => {
    router.push('/contact');
  };


</script>

<style module lang="scss">
  @import '@/assets/scss/mixin.scss';
  @import '@/assets/scss/Home.module.scss';
</style>