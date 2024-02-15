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
    detail: "记录学习和生活点滴"
  },
  {
    icon: "📐",
    title: "开发工具",
    detail: "基于Vue3 + Vite + Typescript 等开发"
  },
  {
    icon: "📩",
    title: "留言",
    detail: "支持游客留言"
  },
  {
    icon: "🎨",
    title: "样式框架",
    detail: "使用基于 sass 的 naive-ui 样式框架"
  },
  {
    icon: "💾",
    title: "资料归档",
    detail: "整理收集各类资源"
  },
  {
    icon: "📱",
    title: "响应式布局",
    detail: "响应式布局支持PC端和移动端显示"
  },
]);
</script>

<style module lang="scss">
.cardContainer {
  display: block;
  background-color: $bg-componment;

  .gridContainer {
    @include contentCenter;
    padding: 5%;

    .grid {
      display: grid;
      // 拉伸占据容器
      justify-content: center;
      justify-items: stretch;
      align-items: stretch;
      gap: $space-card; // 20px

      .items {

        background-color: $homecard-color;
        padding: 1rem;
        border-radius: $border-card; // 12px

        .item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .icon {
            display: flex;
            align-self: flex-start;
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
            align-self: flex-start;
            line-height: 24px;
            font-size: 16px;
            font-weight: 600;
            margin: 0;
          }

          .detail {
            align-self: flex-start;
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

      @media screen and (min-width: 768px) {
        grid-template-columns: repeat(auto-fill, 30%);
      }

      @media screen and (min-width: 480px) and (max-width: 767px) {
        grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
      }

      @media screen and (max-width: 479px) {
        grid-template-columns: repeat(auto-fill, minmax(90%, 1fr));
      }
    }
  }
}

// 媒体查询(适用于网页放大和缩小)
@media screen and (min-width: 1440px) {
    .gridContainer {
      max-width: 1362px;
    }
}
  
  @media screen and (min-width: 1680px) {
    .gridContainer {
      max-width: 1482px;
    }
}
</style>
