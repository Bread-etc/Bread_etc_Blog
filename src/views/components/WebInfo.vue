<template>
  <div :class="$style.card">
    <div :class="$style.cardHeader">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <path
          fill="currentColor"
          d="M10.06 17.88A4.25 4.25 0 0 0 11 18a4 4 0 0 0 2.23-.68l3.22 2.87a3.88 3.88 0 0 0-.2 3.17A4 4 0 1 0 22.62 19l2.54-5.09a3.78 3.78 0 0 0 2.91-.53a4 4 0 1 0-4.69-.38l-2.54 5.09A3.86 3.86 0 0 0 20 18a4 4 0 0 0-2.23.68l-3.22-2.87a3.88 3.88 0 0 0 .2-3.17a4 4 0 1 0-6.45 4.29L4 25V2H2v26a2 2 0 0 0 2 2h26v-2H4.67ZM26 8a2 2 0 1 1-2 2a2 2 0 0 1 2-2Zm-4 14a2 2 0 1 1-2-2a2 2 0 0 1 2 2ZM11 12a2 2 0 1 1-2 2a2 2 0 0 1 2-2Z"
        />
      </svg>
      <span> 网站统计 </span>
    </div>
    <div :class="$style.webInfo">
      <div :class="$style.info" v-for="item in items">
        <div :class="$style.name">{{ item.name }}:</div>
        <div :class="$style.detail">{{ item.detail }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const items = ref([
  {
    name: "文章数目",
    detail: 0,
  },
  {
    name: "运行时间",
    detail: "天",
  },
  {
    name: "总字数",
    detail: 0,
  },
  {
    name: "访客数",
    detail: 0,
  },
  {
    name: "总访问量",
    detail: 0,
  },
  {
    name: "最后更新",
    detail: "2023-09-16",
  },
]);
</script>

<style lang="scss" module>
.card {
  @include card;
  margin-top: 1rem;
  padding: 20px;
  flex-grow: 0;
  .cardHeader {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding: $space-card-component; // 5px

    span {
      font-size: 18px;
      font-weight: 600;
      margin-left: 10px;
    }

    svg {
      width: 24px;
      height: 24px;
      font-weight: 700;
    }
  }

  .webInfo {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: $space-card-component; // 5px
    cursor: default;

    .info {
      display: flex;
      flex-direction: row;
      color: $card-text-color;
      font-size: $font-size-default; // 14px
      line-height: 1.35rem;

      .name {
        flex-grow: 1;
      }
    }
  }
}
</style>
