// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// 引入插件
import viteCompression from "vite-plugin-compression";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
  // 别名
  resolve: {
    alias: {
      "@": "/src",
      "~router": "src/assets/styles/router",
      "~components": "src/assets/styles/components",
      "~utils": "src/utils",
    },
  },
  // 插件
  plugins: [
    vue(),
    viteCompression({
      algorithm: "gzip",
      threshold: 10240,
      verbose: true,
      ext: ".gz",
      deleteOriginFile: true,
    }),
    viteImagemin({
      optipng: {
        optimizationLevel: 5, // 0-7 的优化界别
      },
      mozjpeg: {
        quality: 20, // 压缩质量, 0-100 (最差到最佳)
      },
      svgo: {
        plugins: [
          { name: "removeViewBox" },
          { name: "removeEmptyAttrs", active: false },
        ],
      },
    }),
  ],
  css: {
    devSourcemap: true,
    // 模块配置项
    modules: {
      // 是否开启模块化(默认值为“local”)
      scopeBehaviour: "local",
      // 修改生成的配置对象的key的展示形式
      localsConvention: "camelCase",
    },
    // 预处理器配置项
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/index.scss";`,
      },
    },
  },
  server: {
    port: 3030,
    strictPort: true,
    hmr: true,
    cors: true,
    proxy: {
      "/api": {
        // 匹配请求路径
        target: "https://admin.hastur23.top/",
        changeOrigin: true,
        secure: true, // 是否 https 接口
      },
    },
  },
  base: "./", // 根目录
  build: {
    target: "esnext",
    assetsDir: "assets",
    cssCodeSplit: true, // 使用css代码拆分
    sourcemap: true, // 构建后是否生成 source map 文件
    minify: "terser",
    terserOptions: {
      compress: {
        // 生产环境去掉控制台console
        drop_console: true,
        // 生产环境去掉控制台 debugger
        drop_debugger: true,
        // 删除无法访问的代码, 默认为true
        dead_code: true,
      },
    },
    chunkSizeWarningLimit: 2000, // 区块大小警告限制
    // 资源打包目录 (chunk 分为 index 和 vendor)
    rollupOptions: {
      output: {
        manualChunks: (id: string) => {
          if (id.includes("node_modules")) {
            return "vendor";
          }
          return "index";
        },
      },
    },
  },
});
