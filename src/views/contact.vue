<!-- contact.vue -->
<template>
    <div :class="$style.container">
      <div :class="$style.content">
        <div :class="$style.card">
          <div :class="$style.outline">
            <div :class="$style.textContent">
              <h1>欢迎来到我的留言板！👋</h1>
              <h2>如何留言？📝</h2>
              <span>经👉 <a href="https://github.com/login/oauth/authorize?client_id=983b9d8960cacfb8d0bc&state=breadeTc">Github</a> 登录后,在下方的留言框中输入您的留言内容即可。</span>
              <span>请注意，为了保持良好的阅读体验喝交流氛围，请勿发布任何不良信息和言论。</span>
              <h2>免责声明 🧷</h2>
              <span>⚠️本站内容仅代表个人观点，可以转载，但请注明出处。</span>
              <span>⚠️本网站分享内容仅供学习参考使用，请勿用于其他用途。</span>
              <h2>感谢您的支持 🙏</h2>
            </div>
            <div :class="$style.divider"></div>
            <div :class="$style.messageContent">
              <h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M17.74 30L16 29l4-7h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9v2H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-4.84Z"/><path fill="currentColor" d="M8 10h16v2H8zm0 6h10v2H8z"/></svg>
                评论
              </h2>
              <div :class="$style.message">
                <el-input
                  v-model="textarea"
                  :autosize="{ minRows: 2, maxRows: 4}"
                  type="textarea"
                  placeholder="请输入"
                  maxlength="150"
                  show-word-limit
                />
                <button :class="$style.sendMessage">
                  发送
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const textarea = ref('')
</script>

<style lang="scss" module>
@import "~router/Contact.module.scss"
</style>