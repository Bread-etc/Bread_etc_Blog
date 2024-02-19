<!-- SortCard for Study.vue -->
<template>
  <div :class="$style.card">
    <div :class="$style.cardHeader">
      <span>📂 分类</span>
    </div>
    <div :class="$style.category">
      <n-collapse :class="$style.NCollapse" accordion>
        <n-collapse-item
          v-for="item in tagAlias"
          :title="item.tag"
          :class="$style.NCollapseItem"
        >
          <span
            v-for="alias in item.aliases"
            :key="alias"
            :class="$style.itemDiv"
          >
            📍 {{ alias }}
          </span>
        </n-collapse-item>
      </n-collapse>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NCollapse, NCollapseItem } from "naive-ui";
import { getTagAlias } from "../../api/BlogItem/getTagAlias";
import { ref, onMounted } from "vue";

type tagAndAlias = {
  tag: string;
  aliases: string[];
};

const tagAlias = ref<tagAndAlias[]>();

function fetchTagAndAlias() {
  getTagAlias()
    .then((result) => {
      tagAlias.value = result;
    })
    .catch((error) => {
      console.error("获取标签分类信息失败..", error);
    });
}

onMounted(() => {
  fetchTagAndAlias();
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
  .category {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding: $space-card-component; // 5px
    cursor: pointer;

    .NCollapse {
      background-color: $bg-color;
      color: $text-color;

      .NCollapseItem {
        color: inherit;

        div {
          color: inherit;

          span {
            margin-left: 1rem;
            display: flex;
            flex-direction: column;
            padding: 2px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            max-width: 100px; /* 设置最大宽度，超出部分将显示省略号 */
          }
        }
      }
    }
  }
}
</style>
