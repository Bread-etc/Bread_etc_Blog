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
      <div :class="$style.blog">
        <div :class="$style.catalog">
          <MasterCard :articleNum="information.articleNum" :category="information.category.length"/>
          <SortCard :category="information.category"/>
          <WebInfo />
        </div>
        <div :class="$style.rightContent">
          <div :class="$style.mainCard">
            <div v-for="blog in blogList.list" :key="blog.id" :class="$style.textContent">
              <MainText :title="blog.title" :content="blog.content" :image="blog.image" :category="blog.category" :loading="loading"/>
            </div>
          </div>
          <el-pagination
            layout="prev, pager, next"
            :current-page="blogList.currentPage"
            :page-size="blogList.pageSize"
            :total="blogList.totalCount"
            @current-change="handlePageChange"
            :class="$style.pagination"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MasterCard from "./components/MasterCard.vue";
import SortCard from "./components/SortCard.vue";
import WebInfo from "./components/WebInfo.vue";
import MainText from "./components/MainText.vue";
import { getBlogInfo } from "../api/BlogItem/blogItem";
import { getGeneralInfo } from "../api/BlogItem/generalInfo";
import { ref, reactive, onMounted } from "vue";

// 初始化对象
const blogList = reactive({
  currentPage: 1,
  pageSize: 6,
  totalCount: 10,
  list: [],
})
const information = reactive({
  articleNum: 1,
  category: [],
})
const loading = ref(false)


// 换页
function handlePageChange(newPage: number) {
  blogList.currentPage = newPage
  fetchBlogList(newPage)
}


// 赋值
function setBlogList(data) {
  blogList.currentPage = data.currentPage
  blogList.pageSize = data.pageSize
  blogList.totalCount = data.totalCount
  blogList.list = data.list
}
function setGeneralInfo(data) {
  information.articleNum = data.articleNum
  information.category = data.category
}

// 网络请求
async function fetchBlogList(query: number) {
  try {
    const response = await getBlogInfo(query);
    setBlogList(response)
  } catch (error) {
    console.error(error);
  }
}
async function fetchGeneralInfo() {
  try {
    const responseGeneral = await getGeneralInfo();
    setGeneralInfo(responseGeneral)
  } catch (error) {
    console.error(error);
  } finally {
    // 加载状态改为true
    loading.value = true
  }
}

onMounted(() => {
  fetchGeneralInfo();
  fetchBlogList(blogList.currentPage);
})

</script>

<style module lang="scss">
@import "~router/Study.module.scss";
</style>