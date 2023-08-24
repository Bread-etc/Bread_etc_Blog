<!-- MasterCard for Study.vue -->
<template>
    <div :class="$style.card">
        <div :class="$style.cardHead"><br></div>
        <div :class="$style.authorPic">
            <img src="@/assets/images/HeadPicture.jpg" alt="image/HeadPicture" class="img-fluid">
        </div>
        <div :class="$style.authorTag">
            <div :class="$style.tag">
                student
            </div>
        </div>
        <div :class="$style.authorName">
            <span>Bread_etc</span>
        </div>
        <div :class="$style.authorWork">
            文章:10 | 分类: 0
        </div>
        <div :class="$style.authorGithub">
            <button>Follow me</button>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" module>
@import '../assets/scss/theme/default-theme';
@import '../assets/scss/theme/dark-theme';
@import '@/assets/scss/MasterCard.module.scss';
</style>