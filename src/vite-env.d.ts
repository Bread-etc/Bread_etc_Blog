/// <reference types="vite/client" />

// 用于兼容vue单文件组件的
declare module '*.vue' {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>
    export default component
}

// 用于兼容bootstrap文件
declare module 'bootstrap'

// 用于兼容typedJs
declare module 'vue3typed'