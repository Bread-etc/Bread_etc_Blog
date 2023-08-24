<template>
    <div>
        <button @click="toggleTheme">切换</button>
    </div>  
</template>

<script lang="ts" setup>
    import { useThemeStore } from '../stores/modules/theme';

    const store = useThemeStore();
    const toggleTheme = () => {
        store.setTheme(store.currentTheme === 'default' ? 'dark' : 'default');
    };

</script>

<style lang="scss" module>
@import '../assets/scss/theme/default-theme';
@import '../assets/scss/theme/dark-theme';
</style>