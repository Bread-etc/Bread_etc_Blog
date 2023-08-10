<template>
    <div>
        <vuetyped 
            :strings = strings :loop = loop 
            :smart-backspace="true" :typeSpeed = typeSpeed
            :startDelay = startDelay :backSpeed = backSpeed
        >
            <div class="typing" />
        </vuetyped>
    </div>
</template>

<script lang="ts" setup>
    const strings: string[] = [
        'Bread_etc的个人博客',
        '欢迎来到我的博客',
        'Thanks,thanks,thanks,thanks,Monica~',
        '谁能代替你地位~',
    ];
    const loop: Boolean = true;
    const typeSpeed: number = 100;
    const startDelay: number = 1000;
    const backSpeed: number = 70;
</script>

<style module lang="scss">

</style>