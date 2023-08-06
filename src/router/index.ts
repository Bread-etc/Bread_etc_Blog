import { createRouter, createWebHistory } from 'vue-router'

// 引入其他路由 (使用懒加载引入路由)

// 定义并配置路由
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/router/home.vue')
    },
    {
        path: '/study',
        name: 'study',
        component: () => import('@/router/study.vue')
    },
    {
        path: '/daily',
        name: 'daily',
        component: () => import('@/router/daily.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('@/router/contact.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/router/about.vue')
    },
]

// 定义路由器
const router = createRouter({
    // 使用HTML5，需要在服务器下使用
    history: createWebHistory(),
    routes,
})

export default router