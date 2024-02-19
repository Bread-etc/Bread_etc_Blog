<!-- about.vue -->
<template>
  <div :class="$style.container">
    <div :class="$style.content">
      <div :class="$style.card">
        <div :class="$style.about">
          <div :class="$style.textContent">
            <h1>关于页面 ✅</h1>
            <h2>关于我 😃</h2>
            <span>一名大学生，主要学习方向为前端等</span>
            <h2>联系方式 📧</h2>
            <span :class="$style.email">
              QQ Mail: 1054115624@qq.com
            </span>
            <span :class="$style.email">
              Gmail: mianbao.etc@gmail.com
            </span>
            <h2>支持一下 🍦</h2>
            <span>如果您觉得我的内容对您有所帮助，欢迎赞助我，以支持我继续创作更好的内容！🤗</span>
            <span :class="$style.image">
              <img src="@/assets/images/wechatPay.webp" alt="image/wechat">
            </span>
            <h2>友情链接 🔗</h2>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" module>
@import "~router/About.module.scss"
</style>