<!-- study,vue -->
<template>
  <div class="container" :class="$style.content" >
    <div class="container p-2">
      <div class="row" :class="$style.studyRow">
        <div class="col-md-6" :class="$style.studyWord">
          <div :class="$style.h1Active">
            📚<div>博客内容</div>
          </div>
          <div :class="$style.buttons" style="padding-left: 0;">
            <div :class="$style.buttonActive" style="padding-left: 0;">
              <button :class="$style.postBlog">发布博客</button>
            </div>
          </div>
        </div>
        <div class="col-md-6" :class="$style.studyImg">
          <div :class="$style.imgBg">
            <img src="@/assets/images/study.png" alt="image/studyLogo" class="img-fluid">
          </div>
        </div>
      </div>
    </div>
    <div class="container p-2">
      <div class="row" :class="$style.contentRow">
        <div class="col-3" :class="$style.catalog">
            <MasterCard />
            <SortCard />
            <WebInfo />
        </div>
        <div class="col-9" :class="$style.mainText">
          我是右侧正文
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  // 导入组件
  import MasterCard from '../components/MasterCard.vue';
  import SortCard from '../components/SortCard.vue';
  import WebInfo from '../components/WebInfo.vue';

</script>

<style module lang="scss">
  @import '@/assets/scss/mixin.scss';
  @import '@/assets/scss/Study.module.scss';
</style>