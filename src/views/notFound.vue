<!-- NotFound.vue for 404 Page -->
<template>
  <div :class="$style.container">
    <div :class="$style.content">
        <div :class="$style.card">
            <div :class="$style.notFound">
                <div :class="$style.textContent">
                    <h1>💩404 Not Found</h1>
                    <h2>不妨听首歌休息一下吧！</h2>
                    <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=298 height=52 :src="src"></iframe>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getMusic } from "../api/NotFound/notFoundMusic";
import { ref, onMounted } from "vue";

// 初始化值
const src = ref("//music.163.com/outchain/player?type=2&id=22693580&auto=0&height=32")

// 获取歌曲
async function fetchMusic() {
  try {
    const response = await getMusic();
    src.value = response.musicLink;
  } catch (error) {
    console.error("获取歌单失败",error);
  }
}

onMounted(() => {
  fetchMusic();
})
</script>

<style lang="scss" module>
@import "~router/NotFound.module.scss";
</style>
