import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 使用 ES6 语法导入path
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
  ],
  // 别名
  resolve: {
    alias: {
      // 设置别名
      '@': path.resolve(__dirname, '../src'),
      '~bootstrap': path.resolve(__dirname, '../node_modules/bootstrap'),  
    }
  },
  css: {
    // 是否开启devSourcemap
    devSourcemap: true,
    
    // 模块配置项
    modules: {

      // 是否开启模块化(默认值为“local”)
      scopeBehaviour: 'local',
      
      // 修改生成的配置对象的key的展示形式
      localsConvention: 'camelCase',

    },
    // 预处理器配置项
    preprocessorOptions: {
      scss: {
        // mixin.scss 用于在全局中使用预定义变量
        additionalData: '@use "@/assets/scss/mixin.scss";'
      }
    }
  },
  // 本地服务器配置
  server: {
    port: 3030,
    hmr: true,
  }
})

// console.log(path.resolve(__dirname, '../src'));
