<template>
    <div>
        <el-switch inline-prompt v-model="theme"
                @click="toggleTheme()"
        >

        </el-switch>
    </div>
</template>

<script lang="ts" setup>
import { useToggle } from '@vueuse/shared';

</script>

<style lang="scss" module>
@import '@/assets/styles/theme/default-theme.scss';
</style>