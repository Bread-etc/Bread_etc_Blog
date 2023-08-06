// vite.config.ts
// 使用策略模式
import { defineConfig } from "vite"
import viteBaseConfig from "./config/vite.base.config"
import viteDevConfig from "./config/vite.dev.config"
import viteProdConfig from "./config/vite.prod.config"
import path from 'path'

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

export default defineConfig(({ command, mode }) => {
  // const env = loadEnv(mode, process.cwd(),"")
  // console.log('env',env)  
  return envResolver[command]()
})
