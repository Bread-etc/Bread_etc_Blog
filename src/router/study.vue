<!-- study,vue -->
<template>
  <div class="container p-2" :class="$style.content" >
    <div class="row" :class="$style.contentRow">
      <div class="col-3" :class="$style.catalog">
          <MasterCard />
          <SortCard />
          <WebInfo />
      </div>
      <div class="col-9" :class="$style.mainText">
        我是右侧正文
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  // 导入组件
  import MasterCard from '../components/MasterCard.vue';
  import SortCard from '../components/SortCard.vue';
  import WebInfo from '../components/WebInfo.vue';

</script>

<style module lang="scss">
  @import '@/assets/scss/mixin.scss';
  @import '@/assets/scss/Study.module.scss';
</style>