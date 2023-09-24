<!-- article.vue for article page -->
<template>
  <div :class="$style.container">
    <div :class="$style.content">
      <div :class="$style.card">
        <div :class="$style.mdContent">
          <div :class="$style.text">
            <Markdown :source="source" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Markdown from "vue3-markdown-it";
import "highlight.js/scss/atom-one-dark.scss";

const source = "- this is not so cool!";
</script>

<style lang="scss" module>
.container {
  display: block;
  background-color: $bg-color-content;

  .content {
    @include contentCenter;
    padding: $space-container; // 10px
    flex-direction: row;
    padding-top: 1rem;
    width: 80%;

    .card {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-grow: 1;

      .mdContent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .text {
          width: 100%;
          @include card;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 2rem;
        }
      }
    }
  }
}

// 响应式
@media screen and (min-width: 1440px) {
  .content {
    max-width: 1362px;
  }
}

@media screen and (min-width: 1680px) {
  .content {
    max-width: 1482px;
  }
}
</style>
