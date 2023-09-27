<!-- essay.vue -->
<template>
  <div :class="$style.container">
    <div :class="$style.content">
      <div :class="$style.study">
        <div :class="$style.studyFunction">
          <div :class="$style.headTitle">
            📝
            <div>博客内容</div>
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
            <template v-if="blogList.list.length > 0">
              <div v-for="blog in blogList.list" :key="blog.id" :class="$style.textContent">
                <MainText :id="blog.id" :title="blog.title" :alias="blog.alias" :content="blog.content" :image="blog.image" :category="blog.category" :time="blog.time"/>
              </div>
            </template>
            <template v-else>
              <div v-for="index in 5" :key="index" :class="$style.skeletonContent" style="align-items: flex-start; flex-direction: row;">
                <el-skeleton-item variant="image" style="width: 50%; height: 100%;" animated/>
                <div
                  style="
                    width: 50%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                    padding: 1rem;
                    box-sizing: border-box;
                  "
                >
                  <el-skeleton variant="text" animated/>
                </div>
              </div>
            </template>
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
const ready = ref(false)



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
  } finally {
    // 加载状态改为true
    ready.value = true;
  }
}
async function fetchGeneralInfo() {
  try {
    const responseGeneral = await getGeneralInfo();
    setGeneralInfo(responseGeneral)
  } catch (error) {
    console.error(error);
  }
}


onMounted(() => {
  
  fetchGeneralInfo();
  fetchBlogList(blogList.currentPage);
})


</script>

<style module lang="scss">
@import "~router/Essay.module.scss";
</style>