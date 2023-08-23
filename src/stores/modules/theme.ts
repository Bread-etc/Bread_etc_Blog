// 用于管理主题状态
import { defineStore } from "pinia";

export const useThemeStore = defineStore('theme', {
    state: () => ({
        isDarkMode: false,  // 默认为浅色模式
    }),
    actions: {
        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode;
        }
    },
});