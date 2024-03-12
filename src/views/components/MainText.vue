<template>
  <div :class="$style.card" @click="navigateToBlog">
    <div :class="$style.image">
      <img :src="props.image" alt="/image/cover" />
    </div>
    <div :class="$style.text">
      <h2 :class="$style.title">{{ props.title }}</h2>
      <article :class="$style.content">
        <div :class="$style.detail">
          <n-icon :component="Calendar3Day16Filled" />
          {{ props.time }}
          &nbsp;|&nbsp;
          <n-tag :bordered="false" size="small" type="success">
            {{ props.tag }}
            <template #icon>
              <n-icon :component="Pin12Filled" />
            </template>
          </n-tag>
        </div>
        <div :class="$style.introduction">{{ props.content }}</div>
      </article>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { NTag, NIcon } from "naive-ui";
import { Pin12Filled, Calendar3Day16Filled } from "@vicons/fluent";

const props = defineProps([
  "id",
  "title",
  "alias",
  "content",
  "image",
  "tag",
  "time",
]);

// 跳转路由
const router = useRouter();
const navigateToBlog = () => {
  const routeName = "essay." + props.alias;
  const routePath = "/essay/" + props.alias;

  // 存储路由
  sessionStorage.setItem("current_alias", props.alias);

  // 添加子路由
  router.addRoute({
    name: routeName,
    path: routePath,
    component: () => import("../article.vue"),
  });

  // 跳转到新的子路由
  router.push({ name: routeName });
};
</script>

<style lang="scss" module>
.card {
  padding: 1rem;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 280px;
  gap: 20px;
  box-sizing: border-box;

  .image {
    width: 50%;
    border-radius: $border-card; // 12px
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      background-color: $card-color;
      transition: transform 0.3s ease;
      border-radius: $border-card; // 12px

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .text {
    width: 50%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    .title {
      font-size: 1.2rem;
      font-weight: 600;
      word-break: break-all;
      margin-top: 0;
      margin-bottom: 0.5rem;
      transition: all 0.2s ease-in;
      cursor: pointer;

      &:hover {
        color: $underline-color;
      }
    }

    .content {
      overflow: hidden;
      cursor: pointer;

      .detail {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 5px;
        align-items: center;
        color: #858585;
        font-size: 13px;
        font-weight: 700;
        margin-bottom: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        
        svg {
          margin-right: -2px;
        }
      }

      .introduction {
        margin-top: 0.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 5; /* 设置行数 */
        -webkit-box-orient: vertical;
        white-space: normal;
        font-family: "LXGW WenKai";
        font-weight: 400;
        font-size: 15px;
      }
    }
  }
}

@media screen and (max-width: 468px) {
  .image {
    display: none;
  }
}
</style>
