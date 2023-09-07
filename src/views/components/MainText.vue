<template>
  <div :class="$style.card">
    <div :class="$style.image">
      <img :src="image" alt="image/blog" />
    </div>
    <div :class="$style.text">
      <h2 :class="$style.title">
        {{ title }}
      </h2>
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
            /></svg
          >{{ detail }}
        </div>
        <div :class="$style.introduction">{{ content }}</div>
      </article>
    </div>
  </div>
</template>

<script lang="ts" setup>
// 此处title和detail字数有限制
const { title, content, image, detail } = defineProps({
  title: {
    type: String,
    default: "文章标题",
  },
  content: {
    type: String,
    default: "一段普通的文章内容",
  },
  image: {
    type: String,
    default: "IMAGE",
  },
  detail: {
    type: String,
    default: "发表于 2023-09-07",
  },
});
</script>

<style lang="scss" module>
.card {
  padding: 1rem;
  display: flex;
  flex-direction: row;
  height: 240px;
  gap: 20px;

  .image {
    flex-grow: 1;
    width: 50%;
    border-radius: $border-card; // 12px
    object-fit: cover;
    transition: all .6s;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .text {
    padding: 1rem;
    flex-grow: 1;
    width: 50%;
    display: flex;
    flex-direction: column;

    .title {
      font-size: 1.2rem;
      font-weight: 500;
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
        display: inline-flex;
        flex-direction: row;
        gap: 5px;
        align-items: center;
        color: #383838;
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
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3; /* 设置行数 */
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
