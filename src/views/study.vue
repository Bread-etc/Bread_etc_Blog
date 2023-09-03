<!-- study,vue -->
<template>
  <div :class="$style.container">
    <div :class="$style.content">
      <div :class="$style.study">
        <div :class="$style.studyFunction">
          <div :class="$style.headTitle">
            📚
            <div>博客内容</div>
          </div>
          <div :class="$style.buttonGroup">
            <div :class="$style.buttonActive">
              <button :class="$style.postBlog">发布博客</button>
            </div>
          </div>
        </div>
        <div :class="$style.studyImg">
          <div :class="$style.imgBg">
            <img src="@/assets/images/study.png" alt="image/studyLogo" />
          </div>
        </div>
      </div>
    </div>
    <div :class="$style.content">
      <div :class="$style.blog">
        <el-col :span="6" :class="$style.catalog">
          <MasterCard />
          <SortCard />
          <WebInfo />
        </el-col>
        <el-col :span="18" :class="$style.mainText">
          <div :class="$style.mainCard">
            <MainText />
          </div>
        </el-col>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ElCol } from "element-plus";
import MasterCard from "./components/MasterCard.vue";
import SortCard from "./components/SortCard.vue";
import WebInfo from "./components/WebInfo.vue";
import MainText from "./components/MainText.vue";
import axios from "axios";

// axios.get(
//   url: 'https://www.fastmock.site/mock/09d46f08fcc9e3aa7d20a714cb5fe876/info/blogList',
  
// )

</script>

<style module lang="scss">
@import "~router/Study.module.scss";
</style>
