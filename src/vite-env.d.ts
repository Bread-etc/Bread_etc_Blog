/// <reference types="vite/client" />

// 用于兼容vue单文件组件的
declare module '*.vue' {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>
    export default component
}

