<!-- 入口文件 -->
<script lang="ts" setup>
import { NMessageProvider } from 'naive-ui';
import Navigation from "./views/components/Navigation.vue";
import Footer from "./views/components/Footer.vue";
</script>

<template>
  <n-message-provider>
    <div class="App">
      <header class="header">
        <Navigation />
      </header>
      <div classs="main">
        <router-view></router-view>
      </div>
      <footer class="footer">
        <Footer />
      </footer>
    </div>
  </n-message-provider>
</template>

<style lang="scss">
.App {

  display: flex;
  flex-direction: column;
  align-content: center;

  .header {
    margin: 0;
    padding: 0;
    top: 0;
    left: 0;
    position: sticky;
    width: 100%;
    z-index: 100;
  }

  .main {
    margin: 0;
    padding: 0;
    width: 100%;
  }

  .footer {
    margin: 0;
    padding: 0;
    width: 100%
  }
}

body {
  // 全局字体
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;

  // body样式
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  min-width: 320px;
  min-height: 100vh;
  font-size: 16px;
  font-weight: 400;
  background-color: $bg-color;
  color: $text-color;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;

  // IE浏览器滚动条样式
  scrollbar-track-color: transparent;  
  scrollbar-base-color: $underline-color;
  // firebox浏览器
  scrollbar-width: thin;
  scrollbar-color: $underline-color transparent;
}

// 选中文字样式
::selection {
  background-color: #711eff; /* 设置背景颜色为紫色 */
  color: white; /* 设置文字颜色为白色 */
}

// 滚动条样式
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: $underline-color;
}

::-webkit-scrollbar-track {
  background: transparent;
}

@font-face {
  font-family: 'LXGW WenKai';
  src: url('./assets/fonts/LXGWWenKaiGBScreen.ttf') format('truetype');
}

</style>
