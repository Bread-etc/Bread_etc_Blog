import { defineConfig, ConfigEnv, UserConfigExport } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from 'vite-plugin-mock'

const pathSrc = path.resolve(__dirname, '../src')


export default defineConfig({
    // 别名
    resolve: {
      alias: {
        '@': pathSrc,
        '~router': path.resolve(pathSrc + '/assets/styles/router'),
        '~components': path.resolve(pathSrc + '/assets/styles/components'),
        '~utils': path.resolve(pathSrc + '/utils'),
      }
    },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'],
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'Icon'
        })
      ],
      dts: path.resolve(pathSrc + '/autoImport', 'auto-imports.d.ts')
    }),
    Components({
      resolvers: [
        IconsResolver({
          enabledCollections: ['ep', 'carbon', 'noto']
        }),
        ElementPlusResolver(),
      ],
      dts: path.resolve(pathSrc + '/autoImport', 'components.d.ts')
    }),
    Icons({
      autoInstall: true,
      compiler: 'vue3'
    }),
    viteMockServe({
      mockPath: "../mock", // mock文件目录
      watchFiles: true, // 监视mockPath所指文件目录
      enable: true, // 启用mock功能
      logger: true, // 在控制台显示请求日志
    })
  ],
  // 预构建vueuse的包
  optimizeDeps: {
    include: ['@vueuse/core']
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

      generateScopedName: '[name]_[local]_[hash:5]',
      
    },
    // 预处理器配置项
    preprocessorOptions: {
      scss: {
        // variables.scss 用于在全局中使用预定义变量
        additionalData: '@import "@/assets/styles/variables.scss";@import "@/assets/styles/mixin.scss";@import "@/assets/styles/common.scss";@import "@/assets/styles/tranisiton.scss";'
        
      }
    }
  },
  server: {
    port: 3030,
    strictPort: true,
    hmr: true,
  }
})

