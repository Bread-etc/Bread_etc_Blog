<template>
  <div :class="$style.card">
    <div :class="$style.cardHeader">
      <span>📈 网站统计 </span>
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
import { getWebInfo } from "../../api/BlogItem/webInfo";
import { ref, onMounted } from "vue";

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

// 网络请求
async function fetchWebInfo() {
  try {
    const response = await getWebInfo();
    // 将接口返回的数据更新到items中
    items.value.forEach(item => {
      if (item.name in response) {
        if (item.name === "运行时间") {
          const diff = Date.now() - new Date(response[item.name]).getTime();
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          item.detail = `${days}天${hours}小时`;
        } else if (item.name === "最后更新") {
          item.detail = new Date(response[item.name]).toLocaleDateString();
        } else {
          item.detail = response[item.name]
        }
      }
    });
  } catch (error) {
    console.error(error);
    
  }
}

onMounted(() => {
  fetchWebInfo();
})


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
