/// <reference types="vite/client" />

// 用于兼容vue单文件组件的
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// 兼容 vue-markdown-it
declare module "vue3-markdown-it";

