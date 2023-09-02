<!-- Footer.vue for footer -->
<template>
  <footer :class="$style.footer">
    <div :class="$style.footerContent">
      <div :class="$style.showInfo">
        <span>
          <a href="https://beian.miit.gov.cn/">粤ICP备2023050288号</a>
          &nbsp;|&nbsp;
          <a href="https://beian.miit.gov.cn/"
            ><img
              src="@/assets/images/China.png"
              alt=""
              style="width: 16px;height: 16px;"
            />粤ICP备2023050288号-1</a
          >
        </span>
        <span> ©&nbsp;2023-2024 By Bread_etc </span>
        <span> Welcome to my blog </span>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style lang="scss" module>
@import "~components/Footer.module.scss";
</style>
