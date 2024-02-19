import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

const pathSrc = path.resolve(__dirname, '../src')


export default defineConfig({
    // 别名
    resolve: {
      alias: {
        '@': pathSrc,
        '~router': path.resolve(pathSrc + '/assets/styles/router'),
        '~components': path.resolve(pathSrc + '/assets/styles/components'),
        '~utils': path.resolve(pathSrc + '/utils'),
        '@fonts': path.resolve(pathSrc + '/assets/fonts'),
      }
    },
  plugins: [
    vue(),
  ],
  css: {
    // 是否开启devSourcemap
    devSourcemap: true,
    
    // 模块配置项
    modules: {
      // 是否开启模块化(默认值为“local”)
      scopeBehaviour: 'local',
      
      // 修改生成的配置对象的key的展示形式
      localsConvention: 'camelCase',

      generateScopedName: '[name]_[local]_[hash:5]',
      
    },
    // 预处理器配置项
    preprocessorOptions: {
      scss: {
        // variables.scss 用于在全局中使用预定义变量
        additionalData: '@import "@/assets/styles/variables.scss";@import "@/assets/styles/mixin.scss";@import "@/assets/styles/tranisiton.scss";'
        
      }
    }
  },
  server: {
    port: 3030,
    strictPort: true,
    hmr: true,
  }
})

