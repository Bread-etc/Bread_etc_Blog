<!-- MasterCard for Study.vue -->
<template>
  <div :class="$style.card">
    <div :class="$style.authorPic">
      <img src="@/assets/images/HeadPicture.jpg" alt="image/HeadPicture" />
    </div>
    <div :class="$style.authorName">
      <span>Bread_etc</span>
    </div>
    <div :class="$style.authorInfo">学生，主要学习前端开发</div>
    <div :class="$style.authorWork">
      文章&nbsp;:&nbsp;{{ articleNum }} | 分类&nbsp;:&nbsp;{{ categoryLength }}
    </div>
    <div :class="$style.authorGithub">
      <a href="https://github.com/Bread-etc">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z"
          />
        </svg>
      </a>
      <a :href="'mailto:' + email">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <path
            fill="currentColor"
            d="M27.39 13.82H16.21v4.63h6.44c-.6 2.95-3.11 4.64-6.44 4.64a7.09 7.09 0 0 1 0-14.18a7 7 0 0 1 4.42 1.58L24.12 7a12 12 0 1 0-7.91 21c6 0 11.45-4.36 11.45-12a9.56 9.56 0 0 0-.27-2.18Z"
          />
        </svg>
      </a>
    </div>
  </div>
</template>
<script lang="ts" setup>
const email: string = 'mianbao.etc@gmail.com';
const { articleNum, categoryLength } = defineProps({
  articleNum: {
    type: Number,
    default: 1
  },
  categoryLength: {
    type: Number,
    default: 3
  }
})

</script>

<style lang="scss" module>
.card {
  @include card;
  flex-grow: 0;
  padding: 20px;
  position: relative;

  .authorPic {
    @include normalCenter;
    justify-content: center;
    padding: $space-card-component; // 5px

    img {
      border-radius: 50%;
      width: 50%;
      z-index: 1;
      transition: all .7s;

      &:hover {
        transform:scale(1.2);
	      transition: all .7s;
      }
    }
  }

  .authorName {
    font-weight: 500;
    font-size: 1rem;
    padding: $space-card-component; // 5px
    padding-top: 1rem;

    span {
      font-family: "Dejavu Sans Mono";
      text-align: center;
    }
  }

  .authorInfo {
    font-size: $font-size-default - 2px; // 12px
    padding: $space-card-component; // 5px
  }

  .authorWork {
    font-size: $font-size-default; // 14px
    padding: $space-card-component; //5px
    display: flex;
    align-items: center;
  }
  .authorGithub {
    display: flex;
    flex-direction: row;
    padding: $space-card-component; // 5px

    a {
      @include allCenter;
      text-decoration: none;
      padding: $space-card-component; // 5px

      svg {
        width: 24px;
        height: 24px;
        color: $text-color;
        transition: all .5s ease-out;

        &:hover {
          transform:scale(1.2);
	        transition: all .5s ease-out;
        }

      }
    }
  }
  // &::before {
  //   content: "";
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   height: 100px; // 根据需要调整高度
  //   background-color: $cardHeader-color;
  //   -webkit-clip-path: ellipse(64% 73% at 50% 0%);
  //   clip-path: ellipse(64% 73% at 50% 0%);
  //   z-index: 0; // 将伪元素放在其他内容之后
  //   border-radius: 12px;
  // }
}
</style>
