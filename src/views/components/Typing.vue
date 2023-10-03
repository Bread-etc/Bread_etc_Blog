<template>
  <div>
    <vuetyped
      :strings="strings"
      :loop="loop"
      :smart-backspace="true"
      :typeSpeed="typeSpeed"
      :startDelay="startDelay"
      :backSpeed="backSpeed"
      :class="$style.type"
      :autoInsertCss="true"
    >
      <div class="typing" />
    </vuetyped>
  </div>
</template>

<script lang="ts" setup>
const strings: string[] = [
  "Bread_etc's Blog",
  "欢迎来到我的博客",
  "Thanks,thanks*3,Monica~",
  "Welcome to my blog",
];
const loop: Boolean = true;
const typeSpeed: number = 100;
const startDelay: number = 1000;
const backSpeed: number = 70;
</script>

<style module lang="scss">
.type {
  align-items: center;
  line-height: 20px;
  color: $homePage-text-color;
  font-size: $font-size-rolling; // 1.1rem
  font-weight: $font-weight-rolling; // 500
}
</style>
