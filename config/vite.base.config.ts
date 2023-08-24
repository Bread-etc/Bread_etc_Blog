import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { themePreprocessorPlugin } from '@zougt/vite-plugin-theme-preprocessor'

// 使用 ES6 语法导入path
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    // 创建动态主题切换
    themePreprocessorPlugin({
      scss: {
        // 不启用任意主题色模式
        arbitraryMode: false,
        // 提供多组变量文件
        multipleScopeVars: [
          {
            // 必需
            scopeName: "theme-default",
            // 变量文件内容不应该夹带样式代码,设定上只需存在变量
            path: path.resolve("@/assets/scss/theme/default-vars.scss"),
          },
          {
            scopeName: "theme-dark",
            path: path.resolve("@/assets/scss/theme/dark-vars.scss"),
          },
        ],
        // css中不是由主题色变量生成的颜色,也抽取到主题css内,可以提高权重
        includeStyleWithColors: [
          {
            color: "#ffffff",
          },
        ],
        // 默认取 multipleScopeVars[0].scopeName
        defaultScopeName: "",
        // 在生产模式是否抽取独立的主题css文件，extract为true以下属性有效
        extract: true,
        // 独立主题css文件的输出路径，默认取 viteConfig.build.assetsDir 相对于 (viteConfig.build.outDir)
        outputDir: "",
        // 会选取defaultScopeName对应的主题css文件在html添加link
        themeLinkTagId: "theme-link-tag",
        // "head"||"head-prepend" || "body" ||"body-prepend"
        themeLinkTagInjectTo: "head",
        // 是否对抽取的css文件内对应scopeName的权重类名移除
        removeCssScopeName: false,
        // 可以自定义css文件名称的函数
        customThemeCssFileName: (scopeName) => scopeName,// 在生产模式是否抽取独立的主题css文件
      }
    }),
  ],
  // 别名
  resolve: {
    alias: {
      // 设置别名
      '@': path.resolve(__dirname, '../src'),
      '~bootstrap': path.resolve(__dirname, '../node_modules/bootstrap'),
      'icons': path.resolve(__dirname, '../node_modules/bootstrap-icons/icons'),
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
        // variables.scss 用于在全局中使用预定义变量
        // additionalData: `@import "@/assets/scss/variables.scss";`
        additionalData: '@import "@/assets/scss/variables.scss";@import "@/assets/scss/theme/default-vars.scss";@import "@/assets/scss/theme/dark-vars.scss";',
      }
    }
  },
  // 本地服务器配置
  server: {
    port: 3030,
    hmr: true,
  }
})

