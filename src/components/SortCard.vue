<!-- SortCard for Study.vue -->
<template>
  <div :class="$style.card">
    <div :class="$style.cardHeader">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <path
          fill="currentColor"
          d="M26 28H6a2.002 2.002 0 0 1-2-2V11a2.002 2.002 0 0 1 2-2h5.667a2.012 2.012 0 0 1 1.2.4l3.466 2.6H26a2.002 2.002 0 0 1 2 2v12a2.002 2.002 0 0 1-2 2zM11.666 11H5.998L6 26h20V14H15.666zM28 9H17.666l-4-3H6V4h7.667a2.012 2.012 0 0 1 1.2.4L18.333 7H28z"
        /></svg
      >
      <span>
        分类
      </span>
    </div>
    <div :class="$style.categoryItem"></div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" module>
.card {
  @include card;
  margin-top: 1rem;
  padding: 20px;

  .cardHeader {
    display: flex;
    flex-direction: row;
    justify-content: flex-start; 
    justify-items: flex-start;
    align-content: center;
    align-items: center;
    
    span {
      font-size: 20px;
      margin-left: 5px;
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }
}
</style>
