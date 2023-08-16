<!-- study,vue -->
<template>
  <div class="container p-2" :class="$style.content" >
    <div class="row" :class="$style.contentRow">
      <div class="col-3" :class="$style.catalog">
          我是左侧目录
      </div>
      <div class="col-9" :class="$style.mainText">
        我是右侧正文
      </div>
    </div>
  </div>
</template>

<script lang="ts">

</script>

<style module lang="scss">
  @import '@/assets/scss/mixin.scss';
  @import '@/assets/scss/Study.module.scss';
</style>