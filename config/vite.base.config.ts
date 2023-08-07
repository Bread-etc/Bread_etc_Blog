import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'

// 使用 ES6 语法导入path
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  // 别名
  resolve: {
    alias: {
      // 设置别名
      '@': path.resolve(__dirname, '../src')
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
      less: {
        math: 'always',
        javascriptEnabled: true,
        // 将global.less作为全局样式，此处从config开始解析目录
        additionalData: `@import "${path.resolve(__dirname, '../src/assets/css/global.less')}";`
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
