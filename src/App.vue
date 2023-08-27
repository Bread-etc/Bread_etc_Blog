<!-- 入口文件 -->
<script lang="ts" setup>
// 引入组件
import {
  ElConfigProvider,
  ElContainer,
  ElHeader,
  ElMain,
  ElFooter,
} from "element-plus";
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <el-config-provider namespace="el">
    <div class="App">
      <el-container>
        <el-header class="header">
          <Navigation />
        </el-header>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
        <el-footer>
          <Footer />
        </el-footer>
      </el-container>
    </div>
  </el-config-provider>
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
  }

  .main {
    margin: 0;
    padding: 0;
    width: 100%;
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
}


</style>
