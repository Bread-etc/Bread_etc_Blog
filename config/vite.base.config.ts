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
      // 设置别名 (从config目录开始向外查找)
      '@': path.resolve(__dirname, '../src')
    }
  },
  server: {
    port: 3030
  }
})
