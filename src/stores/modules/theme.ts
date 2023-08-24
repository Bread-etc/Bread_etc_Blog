// 用于管理主题状态
import { defineStore } from "pinia";

export const useThemeStore = defineStore('theme', {
    state: () => ({
        currentTheme: 'default',    // 默认主题
    }),
    actions: {
        setTheme(theme: string) {
            this.currentTheme = theme;
            console.log(this.currentTheme);
        }
    },
});