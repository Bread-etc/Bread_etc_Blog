// 用于管理主题状态
import { defineStore } from "pinia";

export const useDarkModeStore = defineStore('darkMode', {
    state: () => ({
        // 默认为浅色
        isDarkValue: false,
    }),
    actions: {

        toggleMode(value: boolean) {
            this.isDarkValue = value;
            // 存储isDarkMode的值到localstorage
            localStorage.setItem('theme', this.isDarkValue.toString());
        },

        // 初始化深色模式状态
        initMode() {
            // 从localstorage读取theme的值,如果不存在默认为false
            const savedIsDarkMode = localStorage.getItem('theme');
            if (savedIsDarkMode === null) {
                localStorage.setItem('theme', 'false');
            } else if (savedIsDarkMode === 'false') {
                this.isDarkValue = JSON.parse(savedIsDarkMode);
            } else if (savedIsDarkMode === 'true') {
                document.documentElement.classList.toggle("dark");
                this.isDarkValue = JSON.parse(savedIsDarkMode);
            }
        }
    }
});