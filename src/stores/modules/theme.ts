// 用于管理主题状态
import { defineStore } from "pinia";

export const useDarkModeStore = defineStore('darkMode', {
    state: () => ({
        isDarkValue: false,    // 默认主题
    }),
    actions: {
        toggleDarkMode() {
            this.isDarkValue = !this.isDarkValue;
            console.log(this.isDarkValue);
        }
    },
});