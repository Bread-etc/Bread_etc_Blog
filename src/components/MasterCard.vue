<!-- MasterCard for Study.vue -->
<template>
    <div :class="$style.card">
        <div :class="$style.authorPic">
            <img src="" alt="">
        </div>
        <div :class="$style.authorTag">
            Student
        </div>
        <div :class="$style.authorName">
            <span>Bread_etc</span>
        </div>
        <div :class="$style.authorWork">
            文章:10,分类: 0
        </div>
        <button :class="$style.authroGithub">
            Follow Me
        </button>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" module>
    @import '@/assets/scss/mixin.scss';
    @import '@/assets/scss/MasterCard.module.scss';

</style>