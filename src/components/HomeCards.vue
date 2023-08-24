<template>
    <div class="container p-2">
        <div class="row" :class="$style.grid">
            <div v-for="(item, index) in items" :key="index" class="col" :class="$style.items">
                <article :class="$style.item">
                    <div :class="$style.icon">{{ item.icon }}</div>
                    <h2 :class="$style.subtitle">
                        {{ item.title }}
                    </h2>
                    <p :class="$style.detail">
                        {{ item.detail }}
                    </p>
                </article>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const items = ref([
    {
        icon: '💡',
        title: '随笔',
        detail: '记录学习和生活点滴，好好学习，天天向上！'
    },
    {
        icon: '📐',
        title: '开发工具',
        detail: '基于Vue3 + Vite + Typescript 等工具开发。'
    }, 
    {
        icon: '📩',
        title: '留言',
        detail: '支持游客留言。'
    }, 
    {
        icon: '🅱',
        title: '样式框架',
        detail: '使用基于Sass的 Bootstrap v5 框架。'
    },
    {
        icon: '💾',
        title: '资料归档',
        detail: '整理收集各类资源。'
    },
    {
        icon: '📱',
        title: '响应式布局',
        detail: '响应式布局支持PC端和移动端显示。'
    }
])

</script>

<style module lang="scss">
@import '../assets/scss/theme/default-theme';
@import '../assets/scss/theme/dark-theme';
@import '@/assets/scss/HomeCards.module.scss';

</style>