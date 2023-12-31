<template>
  <div :class="$style.card" @click="navigateToBlog">
    <div :class="$style.image">
      <img :src="image" alt="/image/cover">
    </div>
    <div :class="$style.text">
      <h2 :class="$style.title">{{ title }}</h2>
      <article :class="$style.content">
        <div :class="$style.detail">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M26 4h-4V2h-2v2h-8V2h-2v2H6a2.002 2.002 0 0 0-2 2v20a2.002 2.002 0 0 0 2 2h20a2.002 2.002 0 0 0 2-2V6a2.002 2.002 0 0 0-2-2ZM6 6h4v2h2V6h8v2h2V6h4v4H6Zm0 6h5v6H6Zm13 14h-6v-6h6Zm0-8h-6v-6h6Zm2 8v-6h5l.001 6Z"
            />
          </svg>
          {{ time }}
          &nbsp;|
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="m28.1 18.9l-15-15c-2.5-2.6-6.6-2.6-9.2-.1s-2.6 6.7 0 9.2l.1.1L6.8 16l1.4-1.4l-2.9-2.9c-1.7-1.7-1.7-4.6 0-6.3s4.6-1.8 6.3-.1l.1.1l14.9 14.9c1.8 1.7 1.8 4.6.1 6.3c-1.7 1.8-4.6 1.8-6.3.1l-.1-.1l-7.4-7.4c-1-1-.9-2.6 0-3.5c1-.9 2.5-.9 3.5 0l4.1 4.1l1.4-1.4l-4.2-4.2c-1.8-1.7-4.6-1.6-6.3.2c-1.6 1.7-1.6 4.4 0 6.2l7.5 7.5c2.5 2.6 6.6 2.6 9.2.1s2.6-6.7 0-9.3c0 .1 0 0 0 0z"
            />
          </svg>
          {{ category }}
        </div>
        <div :class="$style.introduction">{{ content }}</div>
      </article>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const { id, title, alias, content, image, time, category } = defineProps({
  id: {
    type: Number,
    default: 1,
  },
  title: {
    type: String,
    default: "文章标题",
  },
  alias: {
    type: String,
    default: "博客名称",
  },
  content: {
    type: String,
    default: "一段普通的文章内容",
  },
  image: {
    type: String,
    default: "IMAGE",
  },
  time: {
    type: String,
    default: "2023-09-10"
  },
  category: {
    type: String,
    default: "默认分组",
  },
  ready: {
    type: Boolean,
    default: false,
  },
});

// 跳转路由
const router = useRouter();
const navigateToBlog = () => {
  const routeName = 'essay.' + alias
  const routePath = '/essay/' + alias
  
  // 存储路由为article渲染
  sessionStorage.setItem('current_blogId', id.toString())

  // 添加子路由
  router.addRoute({
    name: routeName,
    path: routePath,
    component: () => import('../article.vue')
  })

  // 跳转到新的子路由
  router.push({ name: routeName })
}
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
    object-fit: cover;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      transition: transform 0.3s ease;

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
      margin-bottom: 1rem;
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
        display: inline-flex;
        flex-direction: row;
        gap: 5px;
        align-items: center;
        color: #858585;
        font-size: 12px;
        margin-bottom: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        svg {
          width: 16px;
          height: 16px;
        }
      }

      .introduction {
        padding: 2px 0;
        margin-top: 1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 5; /* 设置行数 */
        -webkit-box-orient: vertical;
        white-space: normal;
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