<!-- Footer.vue for footer -->
<template>
    <footer class="footer" :class="$style.footer">
        <div class="container" :class="$style.footerContent">
            <div :class="$style.showInfo">
                <span>
                    ©2023-2024 By Bread_etc
                </span>
                <span>
                    Welcome to my blog
                </span>
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" module>
  @import '@/assets/scss/mixin.scss';
  @import '@/assets/scss/Footer.module.scss';
</style>