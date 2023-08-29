<template>
  <div :class="$style.cardContainer">
    <div :class="$style.gridContainer">
      <div :class="$style.grid">
        <div v-for="(item, index) in items" :key="index" :class="$style.items">
          <article :class="$style.item">
            <div :class="$style.icon">{{ item.icon }}</div>
            <h2 :class="$style.subtitle">
              {{ item.title }}
            </h2>
            <p :class="$style.detail">
              {{ item.detail }}
            </p>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const items = ref([
  {
    icon: "💡",
    title: "随笔",
    detail: "记录学习和生活点滴，好好学习，天天向上！",
  },
  {
    icon: "📐",
    title: "开发工具",
    detail: "基于Vue3 + Vite + Typescript 等工具开发。",
  },
  {
    icon: "📩",
    title: "留言",
    detail: "支持游客留言。",
  },
  {
    icon: "🅱",
    title: "样式框架",
    detail: "使用基于Sass的 Bootstrap v5 框架。",
  },
  {
    icon: "💾",
    title: "资料归档",
    detail: "整理收集各类资源。",
  },
  {
    icon: "📱",
    title: "响应式布局",
    detail: "响应式布局支持PC端和移动端显示。",
  },
]);
</script>

<style module lang="scss">
.cardContainer {
  display: block;
  background-color: $bg-componment;

  .gridContainer {
    @include contentCenter;
    padding: $space-container; // 10px
    padding-left: 5%;
    padding-right: 5%;

    .grid {

      display: flex;
      flex-wrap: wrap;
      justify-content: center; // 每行均匀分布盒子
      gap: 20px;

      .items {

        background-color: $homecard-color;
        color: $homePage-text-color;
        padding: 1rem;
        border-radius: $border-card; // 12px
        width: calc(33.33% - #{$space-card * 2}); // 初始显示三行盒子

        @media screen and (max-width: 767px) {
          width: calc(50% - #{$space-card * 2});
        }

        @media screen and (max-width: 479px) {
          width: calc(100% - #{$space-card * 2});
        }

        .item {

          

          .icon {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
            border-radius: 6px;
            background-color: $homecard-minibox-color;
            width: 48px;
            height: 48px;
            font-size: 24px;
            transition: background-color 0.25s;
          }

          .subtitle {
            line-height: 24px;
            font-size: 16px;
            font-weight: 600;
            margin: 0;
          }

          .detail {
            flex-grow: 1;
            padding-top: 8px;
            line-height: 24px;
            font-size: 14px;
            font-weight: 500;
            color: $homePage-text-color;
            margin: 0;
          }
        }
      }
    }
  }
}

</style>
