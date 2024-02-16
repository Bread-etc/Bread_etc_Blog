<!-- contact.vue -->
<template>
    <div :class="$style.container">
      <div :class="$style.content">
        <div :class="$style.card">
          <div :class="$style.outline">
            <div :class="$style.textContent">
              <h1>欢迎来到我的留言板！👋</h1>
              <h2>如何留言？📝</h2>
              <span>经👉 <div>Github</div> 登录后,在下方的留言框中输入您的留言内容即可。</span>
              <span>评论区支持 <div>markdown</div> 格式和 <div>emoji😘</div></span>
              <span>请注意，为了保持良好的阅读体验和交流氛围，请勿发布任何不良信息和言论。</span>
              <h2>免责声明 🧷</h2>
              <span>⚠️本站内容仅代表个人观点。</span>
              <span>⚠️本网站分享内容仅供学习参考使用，请勿用于其他用途。</span>
              <h2>感谢您的支持 🙏</h2>
              <span>非常感谢您能来到我的留言板，并留下宝贵意见，关于问题我会尽快回复。</span>
            </div>
            <div :class="$style.divider"></div>
            <div :class="$style.messageContent">
              <div :class="$style.message">
                <Giscus
                  id="comments"
                  repo="Bread-etc/Bread_etc_Blog"
                  repoId="R_kgDOKDzLlw"
                  category="Comments"
                  categoryId="DIC_kwDOKDzLl84CZz5k"
                  mapping="pathname"
                  reactionsEnabled="1"
                  emitMetadata="0"
                  inputPosition="top"
                  :theme=mode
                  lang="zh-CN"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts" setup>
import Giscus from '@giscus/vue'
import { ref, onMounted } from 'vue'

const theme = ref<boolean>(JSON.parse(localStorage.getItem('theme')));
const mode = ref<string>('');

onMounted(() => {
  mode.value = theme.value ? 'noborder_dark' : 'noborder_light';
})
</script>

<style lang="scss" module>
@import "~router/Contact.module.scss";

giscus-widget::part(iframe) {
  color-scheme: none;
}
</style>