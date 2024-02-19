<template>
  <div :class="$style.card">
    <div :class="$style.cardHeader">
      <span>📈 网站统计 </span>
    </div>
    <div :class="$style.webInfo">
      <div :class="$style.info">
        <div :class="$style.name">🖊️ 文章数目:</div>
        <div :class="$style.detail">{{ props.articleNum }} 篇</div>
      </div>
      <div :class="$style.info">
        <div :class="$style.name">⏰ 运行时间:</div>
        <div :class="$style.detail">{{ runTime }} 天</div>
      </div>
      <div :class="$style.info">
        <div :class="$style.name">🤨 访客数:</div>
        <div :class="$style.detail">{{ visitors }} 位</div>
      </div>
      <div :class="$style.info">
        <div :class="$style.name">⌚ 最后更新:</div>
        <div :class="$style.detail">{{ lastTime }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// 引入 api
import { getDays } from "../../api/BlogItem/getDays";
import { getLastTime } from "../../api/BlogItem/getLastTime";

import { ref, defineProps, onMounted } from "vue";

// 传值
const props = defineProps(["articleNum"]);
const runTime = ref<number>();
const lastTime = ref<string>();
const visitors = ref<number>(0);

// 网络请求
async function fetchWebInfo() {
  try {
    runTime.value = await getDays();
    const last = await getLastTime();
    const date = new Date(last);
    lastTime.value = date.toISOString().split('T')[0];
  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {
  fetchWebInfo();
});
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
