<!-- article.vue for article page -->
<template>
  <div :class="$style.container">
    <div :class="$style.content">
      <div :class="$style.card">
        <div :class="$style.mdContent">
          <div :class="$style.text">
            <Markdown :source="source" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Markdown from "vue3-markdown-it";
import "highlight.js/lib/common";
import "highlight.js/styles/atom-one-dark-reasonable.css";
import { ref, onMounted } from "vue";
import { useMessage } from "naive-ui";

// 引入api
import { getMarkdown } from "../api/MainText/getMarkdown";

const source = ref("");
const alias: string = sessionStorage.getItem("current_alias") as string;
const message = useMessage();

// 网络请求
async function fetchBlogText(query: string) {
  try {
    const data = await getMarkdown(query);
    source.value = data;
  } catch (error) {
    message.error("获取文章失败..");
    console.error("获取具体文章信息失败..", error);
  }
}

onMounted(() => {
  fetchBlogText(alias);
});
</script>

<style lang="scss" module>
.container {
  display: block;
  background-color: $bg-color-content;
  font-family: "LXGW WenKai";
  overflow: hidden;

  .content {
    @include contentCenter;
    padding: $space-container; // 10px
    flex-direction: row;
    padding-top: 1rem;
    width: 80%;

    .card {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-grow: 1;
      width: 80%;

      .mdContent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .text {
          width: 100%;
          @include card;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 2rem;

          div {
            width: inherit;
          }

          div > pre > code {
            font-family: "DejaVu Sans Mono";
            border-radius: 10px;
          }
        }
      }
    }
  }
}

// 响应式
@media screen and (min-width: 1440px) {
  .content {
    max-width: 1362px;
  }
}

@media screen and (min-width: 1680px) {
  .content {
    max-width: 1482px;
  }
}
</style>
