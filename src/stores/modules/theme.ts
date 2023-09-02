// 用于管理主题状态
import { defineStore } from "pinia";

export const useDarkModeStore = defineStore('darkMode', {
    state: () => ({
        isDarkValue: false,    // 默认主题
    }),
    actions: {
        toggleDarkMode() {
            this.isDarkValue = !this.isDarkValue;
            // 存储isDarkMode的值到localstorage
            localStorage.setItem('isDarkMode', JSON.stringify({ isDarkMode: this.isDarkValue }));
        },
        // 添加一个方法用于初始化深色模式状态
        initDarkMode() {
            // 从localstorage读取isDarkMode的值,如果不存在默认为false
            const savedIsDarkMode = localStorage.getItem('isDarkMode');
            if (savedIsDarkMode === null) {
                localStorage.setItem('isDarkMode', JSON.stringify({ isDarkMode: false }));
            } else {
                this.isDarkValue = JSON.parse(savedIsDarkMode).isDarkMode;
            }
        }
    }
});