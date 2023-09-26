<!-- SortCard for Study.vue -->
<template>
  <div :class="$style.card">
    <div :class="$style.cardHeader">
      <!-- <svg
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        data-v-ea893728=""
      >
        <path
          fill="currentColor"
          d="M878.08 448H241.92l-96 384h636.16l96-384zM832 384v-64H485.76L357.504 192H128v448l57.92-231.744A32 32 0 0 1 216.96 384H832zm-24.96 512H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h287.872l128.384 128H864a32 32 0 0 1 32 32v96h23.04a32 32 0 0 1 31.04 39.744l-112 448A32 32 0 0 1 807.04 896z"
        ></path>
      </svg> -->
      <span>📂 分类</span>
    </div>
    <div :class="$style.category">
      <el-collapse v-model="activeName" accordion :class="$style.elCategory">
        <el-collapse-item
          v-for="item in category"
          :key="item.meta.key"
          :title="item.name"
          :path = "item.path"
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

// 传入数据
const { category } = defineProps(['category'])

const activeName = ref("1");

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
