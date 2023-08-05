// 导入路由组件
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import viewsRouter from './views'
import pageRouter from './pages'

// 对RouteRecordRaw类型进行扩展
export type RouteRecordRaw = RouteRecordRaw & {
    hidden: boolean
}

// 定义路由
const router = createRouter({
    history: createWebHashHistory(),
    
})