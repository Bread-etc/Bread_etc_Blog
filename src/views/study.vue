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
            <!-- <img src="@/assets/images/study.png" alt="image/studyLogo" /> -->
          </div>
        </div>
      </div>
    </div>
    <div :class="$style.content">
      <div v-if="isLoading">Loading...</div>
      <div :class="$style.blog" v-if="!isLoading">
        <div :class="$style.catalog">
          <MasterCard />
          <SortCard />
          <WebInfo />
        </div>
        <div :class="$style.rightContent">
          <div :class="$style.mainCard" v-for="blog in blogList" :key="blog.id">
            <MainText :title="blog.title" :content="blog.content" :image="blog.image" :category="blog.category"/>
          </div>
          <el-pagination 
            layout="prev, pager, next" 
            :current-page="1"
            :page-count="5"
            :total="50">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ElPagination } from 'element-plus'
import MasterCard from "./components/MasterCard.vue";
import SortCard from "./components/SortCard.vue";
import WebInfo from "./components/WebInfo.vue";
import MainText from "./components/MainText.vue";
import { getBlogList } from '../api/blogList/index';
import { ref, onMounted } from "vue";

const blogList = ref();
const isLoading = ref(true);
onMounted(async () => {
  try {
    blogList.value = await getBlogList();
    console.log(blogList.value);
    console.log(blogList.value[0]);
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
})

</script>

<style module lang="scss">
@import "~router/Study.module.scss";
</style>
