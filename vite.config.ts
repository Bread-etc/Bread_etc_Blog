// vite.config.ts
// 使用策略模式
import { defineConfig, loadEnv } from "vite"
import viteBaseConfig from "./config/vite.base.config"
import viteDevConfig from "./config/vite.dev.config"
import viteProdConfig from "./config/vite.prod.config"

const envResolver = {
  "build": () => {
    console.log("\n--生产环境--\n")
    return ({ ...viteBaseConfig, ...viteProdConfig })
  },
  "serve": () => {
    console.log("\n--开发环境--\n")
    return ({ ...viteBaseConfig, ...viteDevConfig })
  }
}

// 配置为了在html中使用环境变量
const getViteEnv = ( mode, target ) => {
  return loadEnv( mode, process.cwd())[target]
}

export default defineConfig(({ command, mode }) => {
  // 配置环境变量且前缀设置为WEB
  const env = loadEnv(mode, process.cwd(),"WEB")

  return envResolver[command]()
})
