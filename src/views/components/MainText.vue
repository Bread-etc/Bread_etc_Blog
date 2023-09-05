<template>
    <div :class="$style.card">
        {{ title }} --- {{ content }}
    </div>
</template>

<script lang="ts" setup>

const { title, content } = defineProps({
    title: {
        type: String,
        default: '文章标题',
    },
    content: {
        type: String,
        default: '一段普通的文章内容',
    }
})
</script>

<style lang="scss" module>
.card {
    padding: 0 1rem;
    margin-bottom: 1rem;
}
</style>