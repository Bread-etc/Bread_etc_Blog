<!-- essay.vue -->
<template>
  <div :class="$style.container">
    <div :class="$style.content">
      <div :class="$style.study">
        <div :class="$style.studyFunction">
          <div :class="$style.headTitle">
            📝
            <div>随笔</div>
          </div>
        </div>
      </div>
    </div>
    <div :class="$style.content">
      <div :class="$style.blog">
        <div :class="$style.catalog">
          <MasterCard :articleNum="articleNum" :tagNum="tagNum" />
          <SortCard />
          <WebInfo :articleNum="articleNum" />
        </div>
        <div :class="$style.rightContent">
          <div :class="$style.mainCard">
            <template v-if="blogList.list.length > 0">
              <div
                v-for="blog in blogList.list"
                :key="blog.id"
                :class="$style.textContent"
              >
                <MainText
                  :id="blog.id"
                  :title="blog.title"
                  :alias="blog.alias"
                  :content="blog.content"
                  :image="blog.image"
                  :tag="blog.tag"
                  :time="blog.time"
                />
              </div>
            </template>
            <template v-else>
              <div
                v-for="index in 5"
                :key="index"
                :class="$style.skeletonContent"
                style="align-items: flex-start; flex-direction: row"
              >
                <image style="width: 50%; height: 80%" />
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
                    padding-top: 2rem;
                  "
                >
                  <n-skeleton
                    text
                    :repeat="1"
                    style="margin-bottom: 1rem; width: 50%; --n-color-end: #737373;"
                  />
                  <n-skeleton text :repeat="3" style="margin-bottom: 1rem; --n-color-end: #737373;" />
                </div>
              </div>
            </template>
          </div>
          <n-config-provider style="align-self: center">
            <n-pagination
              size="small"
              v-model:page="blogList.currentPage"
              :default-page-size="5"
              :page-size="blogList.pageSize"
              :item-count="blogList.totalCount"
              @on-update:page="handlePageChange"
              style="
                --n-item-text-color: $text-color;
                --n-item-color-disabled: $bg-color;
                --n-button-icon-color: $text-color;
                --n-button-border: 1px solid $bg-color;
                --n-button-border-hover: none;
                --n-button-icon-color-hover: $bg-color-content;
                --n-item-border-disabled: 1px solid $bg-color;
              "
            />
          </n-config-provider>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// 引入组件
import MasterCard from "./components/MasterCard.vue";
import SortCard from "./components/SortCard.vue";
import WebInfo from "./components/WebInfo.vue";
import MainText from "./components/MainText.vue";
import { NSkeleton, NPagination, NConfigProvider } from "naive-ui";

// 引入api
import { getBlogItems } from "../api/BlogItem/getBlogItems";
import { getArticleNum } from "../api/BlogItem/getArticleNum";
import { getTagInfo } from "../api/BlogItem/getTagInfo";

import { ref, reactive, onMounted } from "vue";

// 初始化对象
const blogList = reactive({
  // 当前页数
  currentPage: 1,
  // 一页内个数
  pageSize: 5, // 6
  // 总数
  totalCount: 10,
  // 博客列表
  list: [],
});
const articleNum = ref<number>(1);
const tagInfo = ref([]);
const tagNum = ref<number>(1);
const ready = ref(false);

// 换页
function handlePageChange(newPage: number) {
  // reactive无需使用.value
  blogList.currentPage = newPage;
  fetchBlogList(newPage);
}

// 获取博客列表
async function fetchBlogList(query: number) {
  try {
    const response = await getBlogItems(query);
    // 执行赋值操作
    setBlogList(response);
  } catch (error) {
    // 错误操作
    console.error(error);
  } finally {
    // 加载状态改为true
    ready.value = true;
  }
}

function setBlogList(newData) {
  // currentPage 当前页数
  blogList.currentPage = newData.currentPage;
  // pageSize 一页内返回最大数量
  blogList.pageSize = newData.pageSize;
  // totalCount 博客总数
  blogList.totalCount = newData.totalCount;
  // list 博客列表
  blogList.list = newData.list;
}

// 获取卡片信息并设置
async function fetchCardInfo() {
  try {
    const an = await getArticleNum();
    const ti = await getTagInfo();
    // 赋值
    articleNum.value = an;
    tagInfo.value = ti;
    tagNum.value = ti.length;
  } catch (error) {
    console.error("卡片信息获取失败..", error);
  }
}

onMounted(() => {
  fetchCardInfo();
  fetchBlogList(blogList.currentPage);
});
</script>

<style module lang="scss">
@import "~router/Essay.module.scss";
</style>
