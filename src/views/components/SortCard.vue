<!-- SortCard for Study.vue -->
<template>
  <div :class="$style.card">
    <div :class="$style.cardHeader">
      <span>📂 分类</span>
    </div>
    <div :class="$style.category">
      <el-collapse :v-model="activeName" accordion :class="$style.elCategory">
        <el-collapse-item
          v-for="item in tagInfo"
          :title="item.tag"
          :class="$style.categoryItem"
        >
          <div :class="$style.itemContent" v-for="subItem in item.content" :key="subItem.id" :path="subItem.path">
            {{ subItem.name }}
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ElCollapseItem, ElCollapse } from "element-plus";
import { ref } from "vue";

const tagInfo = defineProps(['tagInfo']);
// 激活状态 (默认激活)
const activeName = ref<number>(1);

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

    .elCategory {
      width: 100%;
      height: 100%;
      border: none;

      .categoryItem {
        
        div {
          background-color: $bg-componment;
          color: $card-text-color;
          font-size: $font-size-default; // 14px
          padding-bottom: 0;
          border: none;

          div {
            margin-left: 0.5rem;
            &:hover {
              color: $underline-color;
            }
          }
        }
      }
    }
  }
}
</style>
