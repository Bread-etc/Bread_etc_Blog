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

    .grid {

      display: flex;
      margin: 0 auto;
      grid-template-columns: repeat(
        auto-fill,
        minmax(calc(33.33% - 20px), 1fr)
      ); /* 设置每个网格的宽度，考虑间距 */
      grid-auto-columns: auto;
      grid-auto-rows: auto; /* 高度自适应 */
      gap: 20px;
      align-items: center;
      justify-items: center;
      align-content: center;
      justify-content: center;

      .items {
        padding: 0;
        width: 100%;
        height: 100%;

        .item {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 1rem;
          background-color: $homecard-color;
          border-radius: $space-card; // 12px

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

/* 根据屏幕大小调整网格布局 */
@media (max-width: 992px) {
  .grid {
    grid-template-columns: repeat(auto-fill, minmax(calc(50% - 10px), 1fr));
  }
}

@media (max-width: 576px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
